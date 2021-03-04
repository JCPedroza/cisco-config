(() => {
  'use strict';
  const blkBasicGlobal = document.getElementById('blk-basic-global');
  const swtBasicGlobal = document.getElementById('swt-basic-global');
  const blkSsh = document.getElementById('blk-ssh');
  const swtSsh = document.getElementById('swt-ssh');

  const blockSwitchPairs = [
    { block: blkBasicGlobal, switch: swtBasicGlobal },
    { block: blkSsh, switch: swtSsh }
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
})();
