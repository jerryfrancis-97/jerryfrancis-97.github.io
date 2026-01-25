(function() {
  'use strict';

  let searchData = [];

  // Initialize search
  function initSearch() {
    // Build search index from rendered content
    buildSearchIndex();
    
    // Set up search overlay
    setupSearchOverlay();
    
    // Set up keyboard shortcuts
    setupKeyboardShortcuts();
  }

  // Build search index from page content
  function buildSearchIndex() {
    // This will be populated by a Jekyll-generated JSON file
    // For now, we'll search the rendered HTML
    searchData = [];
    
    // Try to load search index if available
    fetch('/search-index.json')
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Search index not found');
      })
      .then(function(data) {
        searchData = data;
      })
      .catch(function() {
        // Fallback: build index from page links
        buildIndexFromLinks();
      });
  }

  // Build index from page links (fallback)
  function buildIndexFromLinks() {
    const links = document.querySelectorAll('a[href^="/"], a[href^="{{ site.baseurl }}/"]');
    links.forEach(function(link) {
      if (link.href && !link.href.includes('#') && link.textContent.trim()) {
        searchData.push({
          title: link.textContent.trim(),
          url: link.getAttribute('href'),
          type: 'page'
        });
      }
    });
  }

  // Simple search function
  function search(query) {
    if (!query || query.length < 2) {
      return [];
    }
    
    const lowerQuery = query.toLowerCase();
    const results = [];
    
    searchData.forEach(function(item) {
      const titleMatch = item.title && item.title.toLowerCase().indexOf(lowerQuery) !== -1;
      const contentMatch = item.content && item.content.toLowerCase().indexOf(lowerQuery) !== -1;
      
      if (titleMatch || contentMatch) {
        let score = 0;
        if (titleMatch) score += 10;
        if (contentMatch) score += 1;
        
        results.push({
          item: item,
          score: score
        });
      }
    });
    
    // Sort by score
    results.sort(function(a, b) {
      return b.score - a.score;
    });
    
    return results.slice(0, 10); // Return top 10 results
  }

  // Display search results
  function displayResults(results, query) {
    const resultsContainer = document.getElementById('search-results');
    
    if (!results || results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-results-empty">No results found for "' + escapeHtml(query) + '"</div>';
      return;
    }
    
    let html = '';
    results.forEach(function(result) {
      const item = result.item;
      const excerpt = item.excerpt || item.content ? getExcerpt(item.content || item.excerpt, query, 150) : '';
      
      html += '<div class="search-result-item" onclick="window.location.href=\'' + item.url + '\'">';
      html += '<div class="search-result-title">' + escapeHtml(item.title) + '</div>';
      if (excerpt) {
        html += '<div class="search-result-excerpt">' + excerpt + '</div>';
      }
      html += '<span class="search-result-type">' + (item.type || 'page') + '</span>';
      html += '</div>';
    });
    
    resultsContainer.innerHTML = html;
  }

  // Get excerpt with highlighted query
  function getExcerpt(text, query, maxLength) {
    if (!text) return '';
    
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    
    if (index === -1) {
      return escapeHtml(text.substring(0, maxLength)) + '...';
    }
    
    const start = Math.max(0, index - 50);
    const end = Math.min(text.length, index + query.length + maxLength);
    let excerpt = text.substring(start, end);
    
    if (start > 0) excerpt = '...' + excerpt;
    if (end < text.length) excerpt = excerpt + '...';
    
    // Highlight query
    const regex = new RegExp('(' + escapeRegex(query) + ')', 'gi');
    excerpt = escapeHtml(excerpt).replace(regex, '<mark>$1</mark>');
    
    return excerpt;
  }

  // Escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Escape regex special characters
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Set up search overlay
  function setupSearchOverlay() {
    const overlay = document.getElementById('search-overlay');
    const searchToggle = document.getElementById('search-toggle');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    
    // Open search
    if (searchToggle) {
      searchToggle.addEventListener('click', function() {
        openSearch();
      });
    }
    
    // Close search
    if (searchClose) {
      searchClose.addEventListener('click', function() {
        closeSearch();
      });
    }
    
    // Close on overlay click
    if (overlay) {
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
          closeSearch();
        }
      });
    }
    
    // Search as you type
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        
        searchTimeout = setTimeout(function() {
          if (query.length >= 2) {
            const results = search(query);
            displayResults(results, query);
          } else {
            document.getElementById('search-results').innerHTML = '<div class="search-results-empty">Start typing to search...</div>';
          }
        }, 300); // Debounce
      });
      
      // Handle Enter key
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          const firstResult = document.querySelector('.search-result-item');
          if (firstResult) {
            firstResult.click();
          }
        }
      });
    }
  }

  // Open search modal
  function openSearch() {
    const overlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (searchInput) {
        setTimeout(function() {
          searchInput.focus();
        }, 100);
      }
    }
  }

  // Close search modal
  function closeSearch() {
    const overlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      if (searchInput) {
        searchInput.value = '';
      }
      document.getElementById('search-results').innerHTML = '<div class="search-results-empty">Start typing to search...</div>';
    }
  }

  // Set up keyboard shortcuts
  function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
      // Ctrl+K or Cmd+K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      
      // ESC to close search
      if (e.key === 'Escape') {
        const overlay = document.getElementById('search-overlay');
        if (overlay && overlay.classList.contains('active')) {
          closeSearch();
        }
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }

})();
