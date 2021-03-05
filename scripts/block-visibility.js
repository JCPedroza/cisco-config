(() => {
  'use strict';
  const switchButton = document.getElementById('rad-isswitch');
  const routerButton = document.getElementById('rad-isrouter');

  const clickSwitchButton = () => {
    const routerBlocks = document.getElementsByClassName('device-router');
    const switchBlocks = document.getElementsByClassName('device-switch');

    [...routerBlocks].forEach((block) => {
      block.hidden = true;
    });

    [...switchBlocks].forEach((block) => {
      block.hidden = false;
    });
  };

  const clickRouterButton = () => {
    const routerBlocks = document.getElementsByClassName('device-router');
    const switchBlocks = document.getElementsByClassName('device-switch');

    [...routerBlocks].forEach((block) => {
      block.hidden = false;
    });

    [...switchBlocks].forEach((block) => {
      block.hidden = true;
    });
  };

  switchButton.addEventListener('click', clickSwitchButton);
  routerButton.addEventListener('click', clickRouterButton);
})();
