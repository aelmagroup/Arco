/* =========================================
   ARCO — Menu latéral partagé
   Rendu dynamique de la barre de gauche,
   présente sur toutes les pages.
   ========================================= */

(function () {

  /* Quelle catégorie / section est active ? Déduit de l'URL. */
  function detectActive() {
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const params = new URLSearchParams(location.search);
    const state = { cat: null, about: false, home: false };

    if (path === 'projets.html') {
      state.cat = params.get('cat');
    } else if (path === 'projet.html') {
      const id = params.get('id');
      const p = (typeof getProject === 'function' && id) ? getProject(id) : null;
      if (p) state.cat = p.category;
    } else if (path === 'apropos.html' || path === 'contact.html') {
      state.about = true;
    } else {
      state.home = true;
    }
    return state;
  }

  function buildSidebar(active) {
    const cats = (typeof CATEGORY_ORDER !== 'undefined') ? CATEGORY_ORDER : [];

    const catLinks = cats.map(key => {
      const c = CATEGORIES[key];
      const isActive = active.cat === key;
      const desc = isActive
        ? `<p class="side-desc">${c.description}</p>`
        : '';
      return `
        <div class="side-item ${isActive ? 'is-active' : ''}">
          <a href="projets.html?cat=${key}" class="side-link side-link--${c.cssClass}">${c.label}</a>
          ${desc}
        </div>`;
    }).join('');

    const aboutActive = active.about ? 'is-active' : '';

    return `
      <a href="index.html" class="side-brand" aria-label="Architecture Commune – Accueil">
        <img src="media/logos/logo-arco.png" alt="Architecture Commune">
      </a>
      <nav class="side-nav" aria-label="Navigation principale">
        ${catLinks}
        <div class="side-item ${aboutActive}">
          <a href="apropos.html" class="side-link">À propos</a>
        </div>
      </nav>`;
  }

  function initToggle() {
    const toggle = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    if (!toggle || !sidebar) return;

    function open()  { sidebar.classList.add('is-open'); toggle.classList.add('is-active'); toggle.setAttribute('aria-expanded', 'true'); if (backdrop) backdrop.classList.add('is-visible'); }
    function close() { sidebar.classList.remove('is-open'); toggle.classList.remove('is-active'); toggle.setAttribute('aria-expanded', 'false'); if (backdrop) backdrop.classList.remove('is-visible'); }

    toggle.addEventListener('click', e => {
      e.stopPropagation();
      sidebar.classList.contains('is-open') ? close() : open();
    });
    if (backdrop) backdrop.addEventListener('click', close);
    sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  function init() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.innerHTML = buildSidebar(detectActive());
    initToggle();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
