import { YearViewer } from './year-viewer';
import { newSpecPage } from '@stencil/core/testing';

it('should render year viewer component', async () => {
    const page = await newSpecPage({
        components: [YearViewer],
        html: `<year-viewer initialyear=1991 endyear=2000></year-viewer>`
    });
    expect(page.root).toEqualLightHtml(
        `<year-viewer class=\"input-calendar\" endyear=\"2000\" initialyear=\"1991\"></year-viewer>`
    );
});

it('should set selected year', () => {
    const yViewer = new YearViewer();
    yViewer.selectedYear = '2000';
    yViewer.componentDidLoad();
    const y = yViewer.years.find(e => e.value === 2000);
    expect(y.selected).toBeTruthy();
});

it('should fill an array with years', () => {
    const yViewer = new YearViewer();
    yViewer.fillYears(2001);
    expect(yViewer.years.length).toBeGreaterThan(0);
});