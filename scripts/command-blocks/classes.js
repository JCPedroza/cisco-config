/**
 * Classes for command block reading and render.
 */
(() => {
  'use strict';

  /**
   * Groups and manages all inputs related to one single command.
   */
  class CommandInput {
    constructor (...htmlElementIds) {
      this.htmlElements = htmlElementIds.map((id) => {
        return document.getElementById(id);
      });
    }

    isRenderReady () {
      // This needs to be changed for validation
      if (!this.htmlElements) {
        return true;
      }
      return this.htmlElements.every((elem) => {
        let isReady;
        if (elem.type === 'text' || elem.type === 'password') {
          isReady = elem.value !== '';
        } else if (elem.type === 'checkbox') {
          isReady = elem.checked;
        }

        const isDisabled = elem.disabled ? elem.disabled : false;

        return isReady && !isDisabled;
      });
    }

    read () {
      if (!this.isRenderReady()) {
        throw new Error('CommandInput is not ready to render.');
      }
      // TODO: input.value isn't used in checkboxes, is this the
      // correct approach?
      return this.htmlElements.map((input) => input.value);
    }
  }

  class Command {
    constructor (templateFunction, ...htmlElementIds) {
      this.commandInput = new CommandInput(...htmlElementIds);
      this.templateFunction = templateFunction;
    }

    render () {
      let commandRender;
      if (this.commandInput.isRenderReady()) {
        commandRender = this.templateFunction(...this.commandInput.read());
      } else {
        commandRender = '';
      }
      return commandRender;
    }
  }

  class CommandBlock {
    constructor (switchId, ...commands) {
      this.switch = document.getElementById(switchId);
      this.commands = commands;
    }

    render () {
      if (this.switch.checked) {
        return this.commands.reduce((blockRender, command) => {
          let commandRender = command.render();
          if (commandRender) {
            commandRender += '\n';
          }
          return blockRender + commandRender;
        }, '');
      } else {
        return '';
      }
    }
  }

  window.ciscoconfig.commandBlocks.classes = {
    Command,
    CommandBlock
  };
})();
