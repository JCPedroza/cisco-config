/**
 * Validation control for input elements.
 */
(() => {
  'use strict';

  const hostname = document.getElementById('hostname');
  const OKMSG = 'Ok';

  /**
   * Validate the length of an input.
   * @param {HTMLElement} input - Input element to validate.
   * @param {Object} range - Range object with min and max attributes.
   * @returns {Object} - Validation object with isOk and msg attributes.
   */
  const isLengthOk = (input, { min, max }) => {
    const str = input.value;
    let validation;

    if (str.length >= min && str.length <= max) {
      validation = { isOk: true, msg: OKMSG };
    } else if (str.length > max) {
      const tooBig = `Length ${str.length} is too big, max is ${max}`;
      validation = { isOk: false, msg: tooBig };
    } else {
      const tooSmall = `Length ${str.length} is too small, min is ${min}`;
      validation = { isOk: false, msg: tooSmall };
    }

    return validation;
  };

  /**
   * Validator for ARPANET names; start with a letter, end with
   * a letter or digit, and letters, digits, or hyphens as interior characters.
   * @param {HTMLElement} input Element containing an ARPANET name.
   */
  const isArpanetName = (input) => {
    const regexp = /^[A-Za-z][A-Za-z0-9-][A-Za-z0-9]*$/g;
    let validation;

    if (regexp.test(input.value)) {
      validation = { isOk: true, msg: OKMSG };
    } else {
      const notArpa = 'Must start with a letter, end with letter or digit, etc.';
      validation = { isOk: false, msg: notArpa };
    }

    return validation;
  };

  /**
   * Validator IPv4 addresses.
   * @param {HTMLElement} input Element containing an IPv4 address as value.
   */
  const isIpv4Ok = (input) => {
    const regexp = /^(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/g;
    let validation;

    if (regexp.test(input.value)) {
      validation = { isOk: true, msg: OKMSG };
    } else {
      validation = { isOk: false, msg: 'Invalid IPv4 address' };
    }

    return validation;
  };
})();
