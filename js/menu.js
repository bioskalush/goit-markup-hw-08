(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile__menu-open"),
    closeMenuBtn: document.querySelector(".mobile__menu-close"),
    menu: document.querySelector(".mobile-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
