/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  CalendarDate,
} from './components/viewers/day-viewer/day-viewer';

export namespace Components {
  interface DayViewer {
    'selectedDate': string;
    'selectedDates': CalendarDate[];
    'selectedDay': string;
  }
  interface InputCalendar {
    'sDay': string;
    'sMonth': string;
    'sYear': string;
  }
  interface MonthViewer {
    'selectedMonth': string;
  }
  interface MtCalendar {
    'endyear': number;
    'format': string;
    'geValue': () => Promise<string>;
    'initialyear': number;
  }
  interface YearViewer {
    'endYear': number;
    'initialYear': number;
    'selectedYear': string;
  }
}

declare global {


  interface HTMLDayViewerElement extends Components.DayViewer, HTMLStencilElement {}
  var HTMLDayViewerElement: {
    prototype: HTMLDayViewerElement;
    new (): HTMLDayViewerElement;
  };

  interface HTMLInputCalendarElement extends Components.InputCalendar, HTMLStencilElement {}
  var HTMLInputCalendarElement: {
    prototype: HTMLInputCalendarElement;
    new (): HTMLInputCalendarElement;
  };

  interface HTMLMonthViewerElement extends Components.MonthViewer, HTMLStencilElement {}
  var HTMLMonthViewerElement: {
    prototype: HTMLMonthViewerElement;
    new (): HTMLMonthViewerElement;
  };

  interface HTMLMtCalendarElement extends Components.MtCalendar, HTMLStencilElement {}
  var HTMLMtCalendarElement: {
    prototype: HTMLMtCalendarElement;
    new (): HTMLMtCalendarElement;
  };

  interface HTMLYearViewerElement extends Components.YearViewer, HTMLStencilElement {}
  var HTMLYearViewerElement: {
    prototype: HTMLYearViewerElement;
    new (): HTMLYearViewerElement;
  };
  interface HTMLElementTagNameMap {
    'day-viewer': HTMLDayViewerElement;
    'input-calendar': HTMLInputCalendarElement;
    'month-viewer': HTMLMonthViewerElement;
    'mt-calendar': HTMLMtCalendarElement;
    'year-viewer': HTMLYearViewerElement;
  }
}

declare namespace LocalJSX {
  interface DayViewer extends JSXBase.HTMLAttributes<HTMLDayViewerElement> {
    'onOnSelectDay'?: (event: CustomEvent<any>) => void;
    'selectedDate'?: string;
    'selectedDates'?: CalendarDate[];
    'selectedDay'?: string;
  }
  interface InputCalendar extends JSXBase.HTMLAttributes<HTMLInputCalendarElement> {
    'onDayFocus'?: (event: CustomEvent<any>) => void;
    'onMonthFocus'?: (event: CustomEvent<any>) => void;
    'onYearFocus'?: (event: CustomEvent<any>) => void;
    'sDay'?: string;
    'sMonth'?: string;
    'sYear'?: string;
  }
  interface MonthViewer extends JSXBase.HTMLAttributes<HTMLMonthViewerElement> {
    'onOnSelectMonth'?: (event: CustomEvent<any>) => void;
    'selectedMonth'?: string;
  }
  interface MtCalendar extends JSXBase.HTMLAttributes<HTMLMtCalendarElement> {
    'endyear'?: number;
    'format'?: string;
    'initialyear'?: number;
    'onSelectedDay'?: (event: CustomEvent<any>) => void;
  }
  interface YearViewer extends JSXBase.HTMLAttributes<HTMLYearViewerElement> {
    'endYear'?: number;
    'initialYear'?: number;
    'onCalendarFocus'?: (event: CustomEvent<any>) => void;
    'onOnSelectYear'?: (event: CustomEvent<any>) => void;
    'selectedYear'?: string;
  }

  interface IntrinsicElements {
    'day-viewer': DayViewer;
    'input-calendar': InputCalendar;
    'month-viewer': MonthViewer;
    'mt-calendar': MtCalendar;
    'year-viewer': YearViewer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


