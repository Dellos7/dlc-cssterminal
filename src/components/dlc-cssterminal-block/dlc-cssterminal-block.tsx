import { Component, h, Prop, Element } from '@stencil/core';


@Component({
    tag: 'dlc-cssterminal-block',
    styleUrl: 'dlc-cssterminal-block.scss',
    shadow: true
})
export class DlcCssterminalBlock {

    @Element() el: HTMLElement;

    @Prop() shell: string;
    @Prop() command: string;
    @Prop() result: string;
    @Prop() delay: number = 0;

    private nWords: number;
    private totalDelay: number;

    componentWillLoad() {
        this.nWords = this.calculateWords();
        this.totalDelay = this.calculateTotalDelay();
        this.shell = this.shell ? this.shell : (this.el.parentElement as HTMLDlcCssterminalElement).shell;
    }

    private calculateWords() {
        return this.command ? this.command.length : 0;
        //return this.command ? this.command.trim().replace(" ", "").length : 0;
    }

    private calculateTotalDelay() {
        return this.delay + this.nWords;
    }

    render() {
        return (
            <div class={"terminal__content-block terminal__content--delay-" + this.delay + "-anim"}>
                <div class="terminal__content-shell" part="terminal-content-shell">
                    {this.shell}
                </div>
                <div class={"terminal__content-command terminal__content-command--" + this.nWords + " terminal__content--delay-" + this.delay} part="terminal-content-command">
                    {this.command}
                </div>
                <div class={"terminal__content-print terminal__content--delay-" + this.totalDelay + "-anim"} part="terminal-content-result">
                    <slot></slot>
                </div>
            </div>
        );
    }
}
