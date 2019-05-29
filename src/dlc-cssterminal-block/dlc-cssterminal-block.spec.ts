import { TestWindow } from '@stencil/core/testing';
import { DlcCssterminalBlock } from './dlc-cssterminal-block';

describe('dlc-cssterminal-block', () => {
  it('should build', () => {
    expect(new DlcCssterminalBlock()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDlcCssterminalBlockElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DlcCssterminalBlock],
        html: '<dlc-cssterminal-block></dlc-cssterminal-block>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
