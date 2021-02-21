(() => {
  'use strict';
  const basicGlobal = window.ciscoconfig.commandBlocks.basicGlobal;

  const outputText = document.getElementById('output-text');
  const generateBtn = document.getElementById('btn-generate');

  const commandBlocks = [
    basicGlobal
  ];

  const generateConfig = () => {
    return commandBlocks.reduce((configRender, block) => {
      return configRender + block.render() + '\n';
    }, '');
  };

  const setOutputText = () => {
    outputText.value = generateConfig();
  };

  generateBtn.onclick = () => setOutputText();
})();
