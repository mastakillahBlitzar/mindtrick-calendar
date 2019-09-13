import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import * as _lodash from 'lodash-es';

const moment = _rollupMoment || _moment;

export interface CalendarDate {
    mDate: _moment.Moment;
    selected?: boolean;
    today?: boolean;
}

@Component({
    tag: 'day-viewer',
    styleUrl: 'day-viewer.scss',
    shadow: true
})
export class DayViewer {

    dayNames = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    weeks: CalendarDate[][] = [];

    @Prop({ mutable: true }) selectedDate: string;
    @Prop() selectedDates: CalendarDate[] = [];
    @Prop() selectedDay = '';
    @Event() onSelectDay!: EventEmitter;

    @State() notify = false;

    constructor() {

    }

    componentDidLoad() {
        this.selectedDate = `${this.selectedDate}01`;
        this.generateCalendar();
        if (this.selectedDay !== '') {
            this.weeks.forEach(e => {

                const d = e.find(day => {
                    return day.mDate.date() === +this.selectedDay;
                });
                if (!!d) {
                    d.selected = true;
                    this.notify = !this.notify;
                    return;
                }
            });

        }
    }

    generateCalendar(): void {
        const mDate = moment(this.selectedDate, 'YYYY/MM/DD');
        const dates = this.fillDates(mDate);
        const weeks: CalendarDate[][] = [];
        while (dates.length > 0) {
            weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    }

    fillDates(currentMoment: _moment.Moment): CalendarDate[] {
        const firstOfMonth = moment(currentMoment).startOf('month').day();
        const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
        const start = firstDayOfGrid.date();
        return _lodash.range(start, start + 42)
            .map((date: number): CalendarDate => {
                const d = moment(firstDayOfGrid).date(date);
                return {
                    today: this.isToday(d),
                    selected: this.isSelected(d),
                    mDate: d,
                };
            });
    }

    isToday(date: _moment.Moment): boolean {
        return moment().isSame(moment(date), 'day');
    }

    isSelected(date: _moment.Moment): boolean {
        return _lodash.findIndex(this.selectedDates, (selectedDate) => {
            return moment(date).isSame(selectedDate.mDate, 'day');
        }) > -1;
    }

    isSelectedMonth(date: _moment.Moment): boolean {
        const mDate = moment(this.selectedDate, 'YYYY/MM/DD');
        return moment(date).isSame(mDate, 'month');
    }

    hostData() {
        return {
            class: {
                'input-calendar': true
            }
        };
    };

    selectDay = (day) => {
        this.weeks.forEach(e => {
            e.forEach(f => {
                f.selected = false;
            });
        });
        day.selected = true;
        this.onSelectDay.emit(day.mDate.date());
        this.notify = !this.notify;
    }

    render() {
        return (
            <div class="day-wrapper">
                <p class="day-wrapper__title">Selecciona el día</p>
                <div class="day-wrapper__day-grid">
                    <div class="day-wrapper__day-grid__day-names spacing">
                        {
                            this.dayNames.map((e) => <div class="unit-day-name">{e}</div>)
                        }
                    </div>
                    <div class="day-wrapper__day-grid__weeks spacing">
                        {
                            this.weeks.map(week => {
                                return week.map(day => {
                                    const isSelectedStyle = `unit-day spacing  ${this.isSelectedMonth(day.mDate) ? `selectable ${day.selected ? 'selected' : ''}`: `disabled-day`}`
                                    return (
                                        <div class={isSelectedStyle} onClick={() => this.selectDay(day)}>{day.mDate.date()}</div>
                                    );
                                });
                            })
                        }
                    </div>
                </div>
            </div>
        );
    };
}