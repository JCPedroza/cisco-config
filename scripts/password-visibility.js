/**
 * Visibility control for password inputs.
 */
(() => {
  'use strict';

  const pswenable = document.getElementById('pswenable');
  const pswenableButton = document.getElementById('pswenableButton');
  const localSecret = document.getElementById('localSecret');
  const pswSshButton = document.getElementById('localSecretButton');

  // Button will affect the paired input.
  const inputButtonPairs = [
    { button: pswenableButton, input: pswenable },
    { button: pswSshButton, input: localSecret }
  ];

  /**
   * Creates a function that switches input types password <-> text.
   * @param {HTMLElement} pswInput - Input element to affect.
   * @returns {function} Input type switcher.
   */
  const revealPsw = (pswInput) => {
    return () => {
      if (pswInput.type === 'password') {
        pswInput.type = 'text';
      } else {
        pswInput.type = 'password';
      }
    };
  };

  /**
   * Creates the event listener and binds it with a button.
   * @param {HTMLElement} pswInput - Input element to affect.
   * @param {HTMLElement} pswButton - Button to bind the listener to.
   */
  const bindPswListener = (pswInput, pswButton) => {
    pswButton.onclick = revealPsw(pswInput);
  };

  // Create all listeners and bind them with their respective buttons.
  inputButtonPairs.forEach((pair) => bindPswListener(pair.input, pair.button));
})();
