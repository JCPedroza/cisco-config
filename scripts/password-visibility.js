/**
 * Visibility control for password inputs.
 */
(() => {
  'use strict';

  const pswenable = document.getElementById('pswenable');
  const pswenableButton = document.getElementById('btn-pswenable');
  const localSecret = document.getElementById('local-secret');
  const pswSshButton = document.getElementById('btn-local-secret');

  // Button will affect the paired input.
  const buttonInputPairs = [
    { button: pswenableButton, input: pswenable },
    { button: pswSshButton, input: localSecret }
  ];

  /**
   * Creates a function that switches input types password <-> text.
   * @param {HTMLElement} pswInput - Input element to affect.
   * @returns {function} Input type switcher.
   */
  const revealPsw = (pswInput, pswButton) => {
    return () => {
      if (pswInput.type === 'password') {
        pswInput.type = 'text';
        pswButton.children[0].className = 'bi bi-eye-slash';
      } else {
        pswInput.type = 'password';
        pswButton.children[0].className = 'bi bi-eye';
      }
    };
  };

  /**
   * Creates the event listener and binds it with a button.
   * @param {HTMLElement} pswInput - Input element to affect.
   * @param {HTMLElement} pswButton - Button to bind the listener to.
   */
  const bindPswListener = (pswInput, pswButton) => {
    pswButton.onclick = revealPsw(pswInput, pswButton);
  };

  // Create all listeners and bind them with their respective buttons.
  buttonInputPairs.forEach((pair) => bindPswListener(pair.input, pair.button));
})();
