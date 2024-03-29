import { Component, h, Listen, State, Prop, Method, EventEmitter, Event } from '@stencil/core';
import moment from "moment"

@Component({
    tag: 'mt-calendar',
    styleUrl: 'mt-calendar.scss',
    shadow: true
})
export class MtCalendar {

    @State() mDate = { day: '', month: '', year: '' };

    @State() openMonths = false;
    @State() openYears = false;
    @State() openDays = false;

    @Prop() initialyear: number;
    @Prop() endyear: number;
    @Prop() format: string = 'YYYY/MM/DD';
    @Event() selectedDay!: EventEmitter;

    
    @Listen('yearFocus')
    onYearFocus(ev: any) {
        if (this.mDate.year.toString() !== ev.detail) {
            this.mDate = { year: ev.detail, month: '', day: '' };
        }
        this.openMonths = false;
        this.openDays = false;
        this.openYears = true;
    }

    @Listen('monthFocus')
    onMonthFocus(ev) {

        if (this.mDate.month.toString() !== ev.detail) {
            this.mDate = { year: this.mDate.year, month: ev.detail, day: '' };
        }
        this.openMonths = true;
        this.openDays = false;
        this.openYears = false;
    }

    @Listen('dayFocus')
    onDayFocus(ev) {
        this.mDate = { year: this.mDate.year, month: this.mDate.month, day: ev.detail };
        this.openMonths = false;
        this.openDays = true;
        this.openYears = false;
        this.selectedDay.emit(this.geValue())
    }

    @Listen('onSelectYear')
    onSelectedYear(ev) {
        if (this.mDate.year.toString() !== ev.detail) {
            this.mDate = { year: ev.detail, month: '', day: '' };
        }
    }

    @Listen('onSelectMonth')
    onSelectedMonth(ev) {
        if (this.mDate.month.toString() !== ev.detail) {
            this.mDate = { year: this.mDate.year, month: ev.detail, day: '' };
        }
        this.mDate = { year: this.mDate.year, month: ev.detail.value, day: this.mDate.day };

    }

    @Listen('onSelectDay')
    onSelectedDay(ev) {
        this.mDate = { year: this.mDate.year, month: this.mDate.month, day: ev.detail };
        this.selectedDay.emit(this.geValue())

    }

    @Method()
    async geValue() {
       return moment(`${this.mDate.year}/${this.mDate.month}/${this.mDate.day}`, 'YYYY/MM/DD').format(this.format)
    }
    hostData() {
        return {
            class: {
                'input-calendar': true
            }
        };
    };

        
    showYears() {
        return this.openYears && <year-viewer initialYear={this.initialyear} endYear={this.endyear} selectedYear={this.mDate.year}></year-viewer>
    }

    showMonths() {
        return this.openMonths && <month-viewer selectedMonth={this.mDate.month}></month-viewer>
    }

    showDays() {
        const date = `${this.mDate.year}/${this.mDate.month}/`;
        return this.openDays && <day-viewer selectedDay={this.mDate.day} selectedDate={date}></day-viewer>
    }

    blurOut = () => {
        this.openMonths = false;
        this.openDays = false;
        this.openYears = false;
    }

    render() {
        return (
            <div class="calendar-wrapper" tabindex="1" onBlur={this.blurOut}>
                <input-calendar sYear={this.mDate.year} sMonth={this.mDate.month} sDay={this.mDate.day}></input-calendar>
                <div>
                    {
                        this.showYears()
                    }
                    {
                        this.showMonths()
                    }
                    {
                        this.showDays()
                    }
                </div>
            </div>
        );
    };
}
