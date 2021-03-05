(() => {
  'use strict';
  const blkBasicGlobal = document.getElementById('blk-basic-global');
  const swtBasicGlobal = document.getElementById('swt-basic-global');
  const blkSsh = document.getElementById('blk-ssh');
  const swtSsh = document.getElementById('swt-ssh');
  const blkConsole = document.getElementById('blk-console');
  const swtConsole = document.getElementById('swt-console');

  const blockSwitchPairs = [
    { block: blkBasicGlobal, switch: swtBasicGlobal },
    { block: blkSsh, switch: swtSsh },
    { block: blkConsole, switch: swtConsole }
  ];

  // Make this more readable
  const switchDisabled = (switchInput, block) => {
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

  blockSwitchPairs.forEach((pair) => {
    pair.switch.onclick = switchDisabled(pair.switch, pair.block);
  });

  // Double click deactivates block
  // Make this more readable
  [...document.getElementsByClassName('code-block-header')]
    .forEach((block) => {
      block.addEventListener('dblclick', () => {
        const region = [...block.getElementsByClassName('form-switch')][0];
        const swt = region.getElementsByClassName('form-check-input')[0];
        swt.click();
      });
    });
})();
