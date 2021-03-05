/**
 * Commands for Secure Shell configuration.
 */
(() => {
  'use strict';
  const { deviceType } = window.ciscoconfig.utils;
  const {
    Command,
    CommandBlock
  } = window.ciscoconfig.commandBlocks.classes;

  const lastVtyPort = {
    switch: 15,
    router: 4
  };

  const domainName = new Command(
    (name) => `ip domain-name ${name}`,
    'ip-domain-name'
  );

  const localUserSecret = new Command(
    (name, secret) => `username ${name} secret ${secret}`,
    'local-username',
    'local-secret'
  );

  const cryptoGenerate = new Command(
    (bytes) => `crypto key generate rsa\n${bytes}`,
    'crypto-bytes'
  );

  const lineVtySsh = new Command(
    () => {
      const lastPort = lastVtyPort[deviceType()];
      const ports = `line vty 0 ${lastPort}`;
      const rest = '\nlogin local\ntransport input ssh';
      return `${ports}${rest}\nexit`;
    }
  );

  const ssh = new CommandBlock(
    'swt-ssh',
    domainName,
    localUserSecret,
    cryptoGenerate,
    lineVtySsh
  );
  window.ciscoconfig.commandBlocks.ssh = ssh;
})();
