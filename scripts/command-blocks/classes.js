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
        return isReady;
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
    constructor (...commands) {
      this.commands = commands;
    }

    render () {
      return this.commands.reduce((blockRender, command) => {
        let commandRender = command.render();
        if (commandRender) {
          commandRender += '\n';
        }
        return blockRender + commandRender;
      }, '');
    }
  }

  window.ciscoconfig.commandBlocks.classes = {
    Command,
    CommandBlock
  };
})();
