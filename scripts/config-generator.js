(() => {
  'use strict';
  const basicGlobal = window.ciscoconfig.commandBlocks.basicGlobal;
  const ssh = window.ciscoconfig.commandBlocks.ssh;

  const generateBtn = document.getElementById('btn-generate');
  const clearBtn = document.getElementById('btn-clear');
  const outputText = document.getElementById('output-text');

  const commandBlocks = [
    basicGlobal
  ];

  const getRadioIsDevice = () => {
    const selected = document.querySelector('input[name="options"]:checked');
    return selected.value;
  };

  const generateConfig = () => {
    return commandBlocks.reduce((configRender, block) => {
      return configRender + block.render() + '\n';
    }, '');
  };

  const setOutputText = () => {
    outputText.value = generateConfig();
  };

  const clearOutputText = () => {
    console.log(getRadioIsDevice());  // debug
    outputText.value = '';
  };

  generateBtn.onclick = () => setOutputText();
  clearBtn.onclick = () => clearOutputText();
})();
