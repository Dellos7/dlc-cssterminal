import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'dlc-cssterminal',
  styleUrl: 'dlc-cssterminal.scss',
  shadow: true
})
export class DlcCssterminal {

  /**
   * (optional) The shell to display in all the blocks
   */
  @Prop() shell: string = '~ user$';

  render() {
    return (
      <div class="terminal" part="terminal">
        <div class="terminal__header" part="terminal-header">
          <div class="terminal__header-buttons" part="terminal-header-buttons">
            <div class="terminal__header-button terminal__header-button--close" part="terminal-header-button-close">
            </div>
            <div class="terminal__header-button terminal__header-button--minimize" part="terminal-header-button-minimize">
            </div>
            <div class="terminal__header-button terminal__header-button--maximize" part="terminal-header-button-maximize">
            </div>
          </div>
        </div>
        <div class="terminal__content" part="terminal-content">
          <slot></slot>
        </div>
      </div>
    );
  }
}
