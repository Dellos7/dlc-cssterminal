/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DlcCssterminal {
    'shell': string;
  }
  interface DlcCssterminalBlock {
    'command': string;
    'delay': number;
    'result': string;
    'shell': string;
  }
}

declare namespace LocalJSX {
  interface DlcCssterminal extends JSXBase.HTMLAttributes {
    'shell'?: string;
  }
  interface DlcCssterminalBlock extends JSXBase.HTMLAttributes {
    'command'?: string;
    'delay'?: number;
    'result'?: string;
    'shell'?: string;
  }

  interface IntrinsicElements {
    'dlc-cssterminal': DlcCssterminal;
    'dlc-cssterminal-block': DlcCssterminalBlock;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLDlcCssterminalElement extends Components.DlcCssterminal, HTMLStencilElement {}
  var HTMLDlcCssterminalElement: {
    prototype: HTMLDlcCssterminalElement;
    new (): HTMLDlcCssterminalElement;
  };

  interface HTMLDlcCssterminalBlockElement extends Components.DlcCssterminalBlock, HTMLStencilElement {}
  var HTMLDlcCssterminalBlockElement: {
    prototype: HTMLDlcCssterminalBlockElement;
    new (): HTMLDlcCssterminalBlockElement;
  };

  interface HTMLElementTagNameMap {
    'dlc-cssterminal': HTMLDlcCssterminalElement;
    'dlc-cssterminal-block': HTMLDlcCssterminalBlockElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

