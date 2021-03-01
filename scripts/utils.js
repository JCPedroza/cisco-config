(() => {
  'use strict';

  const deviceType = () => {
    const selected = document.querySelector('input[name="options"]:checked');
    return selected.value;
  };

  window.ciscoconfig.utils = {
    deviceType
  };
})();
