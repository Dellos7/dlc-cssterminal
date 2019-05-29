import { Component, h, Prop, Element } from '@stencil/core';


@Component({
    tag: 'dlc-cssterminal-block',
    styleUrl: 'dlc-cssterminal-block.scss',
    shadow: true
})
export class DlcCssterminalBlock {

    @Element() el: HTMLElement;

    /**
     * (optional) The shell to display in the block (e.g. ~ user$)
     * This overrides the shell specified in the dlc-cssterminal component
     */
    @Prop() shell: string;
    /**
     * (optional) The command to display in the block (e.g. ls)
     */
    @Prop() command: string;
    /**
     * (optional) The result to display in the block (e.g. Desktop Documents Downloads Pictures Videos)
     */
    @Prop() result: string;
    /**
     * (optional) The delay that should last the result to appear (e.g. 14)
     */
    @Prop() delay: number = 0;
    /**
     * (optional) The number of words to take into account to calculate the command text block width.
     * This is useful when the calculation is not very accurate, so you can accurate it yourself
     */
    @Prop() words: number;

    private totalDelay: number;

    componentWillLoad() {
        this.words = this.words ? this.words : this.calculateWords();
        this.totalDelay = this.calculateTotalDelay();
        this.shell = this.shell ? this.shell : (this.el.parentElement as HTMLDlcCssterminalElement).shell;
    }

    private calculateWords() {
        return this.command ? this.command.length : 0;
        //return this.command ? this.command.trim().replace(" ", "").length : 0;
    }

    private calculateTotalDelay() {
        return this.delay + this.words;
    }

    render() {
        return (
            <div class={"terminal__content-block terminal__content--delay-" + this.delay + "-anim"}>
                <div class="terminal__content-shell" part="terminal-content-shell">
                    {this.shell}
                </div>
                <div class={"terminal__content-command terminal__content-command--" + this.words + " terminal__content--delay-" + this.delay} part="terminal-content-command">
                    {this.command}
                </div>
                <div class={"terminal__content-print terminal__content--delay-" + this.totalDelay + "-anim"} part="terminal-content-result">
                    <slot></slot>
                </div>
            </div>
        );
    }
}
