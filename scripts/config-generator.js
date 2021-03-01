(() => {
  'use strict';
  const basicGlobal = window.ciscoconfig.commandBlocks.basicGlobal;
  const ssh = window.ciscoconfig.commandBlocks.ssh;

  const generateBtn = document.getElementById('btn-generate');
  const clearBtn = document.getElementById('btn-clear');
  const outputText = document.getElementById('output-text');

  const commandBlocks = [
    basicGlobal,
    ssh
  ];

  const deviceType = () => {
    const selected = document.querySelector('input[name="options"]:checked');
    return selected.value;
  };

  const generateConfig = () => {
    const reducer = (tail, block) => tail + block.render() + '\n';
    return commandBlocks.reduce(reducer, '');
  };

  const setOutputText = () => {
    outputText.value = generateConfig();
  };

  const clearOutputText = () => {
    outputText.value = '';
  };

  generateBtn.onclick = () => setOutputText();
  clearBtn.onclick = () => clearOutputText();
})();
