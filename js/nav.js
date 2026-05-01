/* =========================================
   ARCO — Navigation (inline toggle)
   ========================================= */

(function () {
  function initNav() {
    const toggle = document.querySelector('.menu-toggle');
    const nav    = document.getElementById('header-nav');
    if (!toggle || !nav) return;

    function open() {
      nav.classList.add('is-open');
      toggle.classList.add('is-active');
      toggle.setAttribute('aria-expanded', 'true');
    }
    function close() {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', e => {
      e.stopPropagation();
      nav.classList.contains('is-open') ? close() : open();
    });

    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) close();
    });
  }

  document.addEventListener('DOMContentLoaded', initNav);
})();
