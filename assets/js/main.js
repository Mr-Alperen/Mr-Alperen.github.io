/* =========================================================
   MAIN.JS
   Author: Alperen Erkan
   Purpose: Minimal, controlled UI interactions
========================================================= */


(function () {
  'use strict';

  /* =====================================================
     FOOTER YEAR
  ===================================================== */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* =====================================================
     NAVBAR SCROLL EFFECT
  ===================================================== */
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  if (navbar) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 80) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    });
  }

  /* =====================================================
     CONSOLE EASTER EGG (MR. ROBOT STYLE)
  ===================================================== */
  const consoleStyleTitle = `
    color: #00ff9c;
    font-family: monospace;
    font-size: 14px;
  `;

  const consoleStyleText = `
    color: #8b949e;
    font-family: monospace;
    font-size: 12px;
  `;

  console.log('%c> hello, friend.', consoleStyleTitle);
  console.log(
    '%cIf you are reading this, curiosity is still alive.\nResponsible disclosure only.',
    consoleStyleText
  );

  /* =====================================================
     OPTIONAL: KEYBOARD SHORTCUTS
     (Non-intrusive, professional)
  ===================================================== */
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      window.location.href = '/projects.html';
    }
  });

})();
