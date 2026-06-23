(function () {
  // Apply saved theme before paint to avoid flash
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    }

    // Writings page filter tabs
    var tabs = document.querySelectorAll('.filter-tab');
    if (tabs.length) {
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) { t.classList.remove('active'); });
          tab.classList.add('active');
          var filter = tab.dataset.filter;
          document.querySelectorAll('.post-item').forEach(function (item) {
            item.style.display =
              filter === 'all' || item.dataset.tag === filter ? '' : 'none';
          });
        });
      });
    }
  });
})();
