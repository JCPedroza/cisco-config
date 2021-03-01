(() => {
  'use strict';

  const swtBasicGlobal = document.getElementById('swt-basic-global');
  const blkBasicGlobal = document.getElementById('blk-basic-global');

  // Make this more readable
  const switchActive = (switchInput, block) => {
    return () => {
      [...block.children].forEach((elem) => {
        if (elem.classList.contains('form-field')) {
          const inputs = [...elem.getElementsByTagName('input')];
          inputs.forEach((input) => {
            input.disabled = !switchInput.checked;
          });
        }
      });
    };
  };

  swtBasicGlobal.onclick = switchActive(swtBasicGlobal, blkBasicGlobal);
})();
