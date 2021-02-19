/**
 * Commands for basic global configuration.
 */
(() => {
  'use strict';
  const {
    CommandInput,
    Command,
    CommandBlock
  } = window.ciscoconfig.commandBlocks.classes;

  const hostname = new Command(
    new CommandInput('hostname'),
    (name) => `hostname ${name}`
  );

  const enableSecret = new Command(
    new CommandInput('pswenable'),
    (password) => `enable secret ${password}`);

  const bannerMotd = new Command(
    new CommandInput('motd'),
    (message) => `banner motd #${message}#`);

  const passwordEncrypt = new Command(
    new CommandInput('isPswEncrypted'),
    () => 'service password-encryption');

  const noIpDomainLookup = new Command(
    new CommandInput('isNoIpLookup'),
    () => 'no ip domain-lookup');

  const loggingSync = new Command(
    new CommandInput('isLogSync'),
    () => 'logging synchronous');

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
