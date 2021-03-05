(() => {
  'use strict';
  const {
    Command,
    CommandBlock
  } = window.ciscoconfig.commandBlocks.classes;

  const ports = new Command(
    () => 'line console 0'
  );

  const password = new Command(
    (psw) => `password ${psw}`,
    'psw-console'
  );

  const end = new Command(
    () => 'login\nexit'
  );

  const consoleConfig = new CommandBlock(
    'swt-console',
    ports,
    password,
    end
  );

  window.ciscoconfig.commandBlocks.consoleConfig = consoleConfig;
})();
