(function () {
    'use strict';

    var STORAGE_KEY = 'theme';

    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function getStoredTheme() {
        var stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'light' || stored === 'dark' ? stored : null;
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        updateToggleUI(theme);
    }

    function updateToggleUI(theme) {
        var buttons = document.querySelectorAll('[data-theme-set]');
        for (var i = 0; i < buttons.length; i++) {
            var btn = buttons[i];
            var isActive = btn.getAttribute('data-theme-set') === theme;
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            btn.classList.toggle('is-active', isActive);
        }
    }

    function setTheme(theme) {
        localStorage.setItem(STORAGE_KEY, theme);
        applyTheme(theme);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var theme = document.documentElement.getAttribute('data-theme') || getStoredTheme() || getSystemTheme();
        applyTheme(theme);

        var buttons = document.querySelectorAll('[data-theme-set]');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                setTheme(this.getAttribute('data-theme-set'));
            });
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (event) {
            if (!getStoredTheme()) {
                applyTheme(event.matches ? 'dark' : 'light');
            }
        });
    });
}());
