import { Component, h, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
    tag: 'input-calendar',
    styleUrl: 'input-calendar.scss',
    shadow: true
})
export class InputCalendar {

    @Event() yearFocus!: EventEmitter;
    @Event() monthFocus!: EventEmitter;
    @Event() dayFocus!: EventEmitter;

    @Prop({ mutable: true }) sYear = '';
    @Prop({ mutable: true }) sMonth= '';
    @Prop({ mutable: true }) sDay = '';

   

    private onYearFocus = () => {
        this.yearFocus.emit(this.sYear);
    };

    private onMonthFocus = () => {
        this.monthFocus.emit(this.sMonth);
    };

    private onDayFocus = () => {
        this.dayFocus.emit(this.sDay);
    };

    handleYearChange(ev) {
        this.sYear = ev.target.value;
        this.onYearFocus();
    }

    handleMonthChange(ev) {
        this.sMonth = ev.target.value;
        this.onMonthFocus();
    }

    handleDayChange(ev) {
        this.sDay = ev.target.value;
        this.onDayFocus();
    }

    hostData() {
        return {
            class: {
                'input-calendar': true
            }
        };
    };

    render() {
        return (
            <div class="wrapper">
                <input onInput={(e) => this.handleYearChange(e)} value={this.sYear} onFocus={(e) => this.handleYearChange(e)} placeholder="AÑO" class="wrapper__year" />
                <div class="wrapper__divider" tabindex="-1">/</div>
                <input id="month" disabled={this.sYear === ''} onInput={(e) => this.handleMonthChange(e)} value={this.sMonth} onFocus={(e) => this.handleMonthChange(e)} placeholder="MES" class="wrapper__month" />
                <div class="wrapper__divider" tabindex="-1">/</div>
                <input id="day" disabled={this.sMonth === ''} onInput={(e) => this.handleDayChange(e)} value={this.sDay} onFocus={(e) => this.handleDayChange(e)} placeholder="DÍA" class="wrapper__day" />
            </div>
        );
    };
}
