/**
 * Commands for Secure Shell configuration.
 */
(() => {
  'use strict';
  const {
    Command,
    CommandBlock
  } = window.ciscoconfig.commandBlocks.classes;

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
    (fromPort, toPort) => {
      const ports = `line vty ${fromPort} ${toPort}`;
      const rest = '\nlogin local\ntransport input ssh';
      return `${ports}${rest}\nexit`;
    },
    'ssh-from-port',
    'ssh-to-port'
  );

  const ssh = new CommandBlock(
    domainName,
    localUserSecret,
    cryptoGenerate,
    lineVtySsh
  );
  window.ciscoconfig.commandBlocks.ssh = ssh;
})();
