(function() {
  'use strict';

  // Get theme from localStorage or default to light
  function getTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // Set theme
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  }

  // Update theme icon visibility
  function updateThemeIcon(theme) {
    const iconLight = document.querySelector('.theme-icon-light');
    const iconDark = document.querySelector('.theme-icon-dark');
    
    if (iconLight && iconDark) {
      if (theme === 'dark') {
        iconLight.style.display = 'none';
        iconDark.style.display = 'inline-block';
      } else {
        iconLight.style.display = 'inline-block';
        iconDark.style.display = 'none';
      }
    }
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Initialize theme on page load
  function initTheme() {
    const theme = getTheme();
    setTheme(theme);
  }

  // Set up theme toggle button
  function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      setupThemeToggle();
    });
  } else {
    initTheme();
    setupThemeToggle();
  }

  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

})();
