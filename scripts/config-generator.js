(() => {
  'use strict';
  const basicGlobal = window.ciscoconfig.commandBlocks.basicGlobal;
  const generateBtn = document.getElementById('btn-generate');

  const configuration = [
    basicGlobal
  ];

  const generateConfig = () => {
    return configuration.reduce((configRender, block) => {
      return configRender + block.render() + '\n';
    }, '');
  };

  generateBtn.onclick = () => console.log(generateConfig());
})();
