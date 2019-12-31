const init = () => {
    const openMenu = document.querySelector(`.js-open-menu`);
    const closeMenu = document.querySelector(`.site-menu-close`);
  
    const body = document.body;
  
    openMenu.addEventListener(`click`, () => {
      body.classList.add(`is-menu-open`);
    });
    closeMenu.addEventListener(`click`, () => {
      document.body.className = document.body.className.replace(`is-menu-open`, ``);
    });
  };
  
  init();
  