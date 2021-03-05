(() => {
  'use strict';
  const basicGlobal = window.ciscoconfig.commandBlocks.basicGlobal;
  const ssh = window.ciscoconfig.commandBlocks.ssh;
  const consoleConfig = window.ciscoconfig.commandBlocks.consoleConfig;

  const generateBtn = document.getElementById('btn-generate');
  const clearBtn = document.getElementById('btn-clear');
  const outputText = document.getElementById('output-text');

  const commandBlocks = [
    basicGlobal,
    ssh,
    consoleConfig
  ];

  const generateConfig = () => {
    const reducer = (tail, block) => {
      let blockRender = block.render();
      if (blockRender) blockRender += '\n';
      return tail + blockRender;
    };
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
