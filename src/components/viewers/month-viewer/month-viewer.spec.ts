import { MonthViewer } from './month-viewer';
import { newSpecPage } from '@stencil/core/testing';

it('should render month viewer component', async () => {
    const page = await newSpecPage({
        components: [MonthViewer],
        html: `<month-viewer></month-viewer>`
    });
    expect(page.root).toEqualLightHtml(
        `<month-viewer class=\"input-calendar\"></month-viewer>`
    );
});

it('should build an array with the 12 months of the year', () => {
    const mViewer = new MonthViewer();
    expect(mViewer.months.length).toEqual(12);
});
