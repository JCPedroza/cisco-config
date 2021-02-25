/**
 * Commands for basic global configuration.
 */
(() => {
  'use strict';
  const {
    Command,
    CommandBlock
  } = window.ciscoconfig.commandBlocks.classes;

  const hostname = new Command(
    (name) => `hostname ${name}`,
    'hostname');

  const enableSecret = new Command(
    (password) => `enable secret ${password}`,
    'pswenable');

  const bannerMotd = new Command(
    (message) => `banner motd #${message}#`,
    'motd');

  const passwordEncrypt = new Command(
    () => 'service password-encryption',
    'isPswEncrypted');

  const noIpDomainLookup = new Command(
    () => 'no ip domain-lookup',
    'isNoIpLookup');

  const loggingSync = new Command(
    () => 'logging synchronous',
    'isLogSync');

  const basicGlobal = new CommandBlock(
    hostname,
    enableSecret,
    bannerMotd,
    passwordEncrypt,
    noIpDomainLookup,
    loggingSync
  );

  window.ciscoconfig.commandBlocks.basicGlobal = basicGlobal;
})();
