import { Component, h, EventEmitter, Event, Prop, State } from '@stencil/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

@Component({
    tag: 'year-viewer',
    styleUrl: 'year-viewer.scss',
    shadow: true
})
export class YearViewer {

    years: { value: any, selected: boolean }[] = [];
    @Event() calendarFocus!: EventEmitter;
    @Event() onSelectYear!: EventEmitter;

    @Prop() initialYear: number = 1960;
    @Prop() endYear: number = 0;
    @Prop() selectedYear = '';

    @State() notify = false;

    constructor() {
        this.years = [];
        let mEndYear;
        if (this.endYear === 0 || this.endYear < this.initialYear) {
            mEndYear = moment().format('YYYY'); 
        } else {
            mEndYear = this.endYear;
        }
        this.fillYears(mEndYear);
    }

    fillYears(endYear) {
        for (let i = this.initialYear; i <= endYear; i++) {
            this.years.push({ value: i, selected: false });
        }
        this.notify = !this.notify;
    }

    componentDidLoad() {
        if (this.selectedYear !== '') {
            const y = this.years.find(e => e.value === +this.selectedYear);
            y.selected = true;
        }
        this.notify = !this.notify;
    }


    hostData() {
        return {
            class: {
                'input-calendar': true
            }
        };
    };

    selectYear = (y) => {
        this.years.forEach(e => e.selected = false);
        y.selected = true;
        this.onSelectYear.emit(y.value);
        this.notify = !this.notify;
    }

    render() {

        return (
            <div class="year-wrapper">
                <p class="year-wrapper__title">Selecciona el año</p>
                <div class="year-wrapper__year-grid">
                    {
                        this.years.map((e) => {
                            const isSelectedStyle = `unit-year spacing selectable ${e.selected ? 'selected' : ''}`
                            return <div class={isSelectedStyle} onClick={() => this.selectYear(e)}>{e.value}</div>
                        })
                    }
                </div>
            </div>
        );
    };
}
