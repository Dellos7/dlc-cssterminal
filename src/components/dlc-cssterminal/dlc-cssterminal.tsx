import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'dlc-cssterminal',
  styleUrl: 'dlc-cssterminal.scss',
  shadow: true
})
export class DlcCssterminal {

  @Prop() shell: string = '~ user$';

  render() {
    return (
      <div class="wrapper">
        <div class="terminal">
          <div class="terminal__header">
            <div class="terminal__header-buttons">
              <div class="terminal__header-button terminal__header-button--close">
              </div>
              <div class="terminal__header-button terminal__header-button--minimize">
              </div>
              <div class="terminal__header-button terminal__header-button--maximize">
              </div>
            </div>
          </div>
          <div class="terminal__content">
            <slot></slot>
            {/*<dlc-cssterminal-block shell="~ david$" command="ls">
              Desktop Documents Downloads Pictures Videos
            </dlc-cssterminal-block>
            <dlc-cssterminal-block shell="~ david$" command="echo $USER" delay={3}>
              David López Castellote
            </dlc-cssterminal-block>
            <dlc-cssterminal-block shell="~ david$" command="pwd" delay={14}>
              /home/david
            </dlc-cssterminal-block>
            <dlc-cssterminal-block shell="~ david$" command="cat package.json" delay={18}>
              <pre>
              </pre>
            </dlc-cssterminal-block>
    <dlc-cssterminal-block shell="~ david$" command="&nbsp;" delay={35}></dlc-cssterminal-block>*/}
          </div>
        </div>
      </div>
    );
  }
}
