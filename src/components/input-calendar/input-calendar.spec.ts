import { InputCalendar } from './input-calendar';
import { newSpecPage } from '@stencil/core/testing';

it('should render Input calendar component', async () => {
    const page = await newSpecPage({
        components: [InputCalendar],
        html: `<input-calendar></input-calendar>`
    });
    expect(page.root).toEqualLightHtml(
        `<input-calendar></input-calendar>`
    );
});

it('should modify the year', () => {
    const dViewer = new InputCalendar();
    dViewer.handleYearChange({target: {value: '2019'}})
    expect(dViewer.sYear).toEqual('2019');
});

it('should modify the month', () => {
    const dViewer = new InputCalendar();
    dViewer.handleMonthChange({target: {value: '2'}})
    expect(dViewer.sMonth).toEqual('2');
});

it('should modify the day', () => {
    const dViewer = new InputCalendar();
    dViewer.handleDayChange({target: {value: '4'}})
    expect(dViewer.sDay).toEqual('4');
});