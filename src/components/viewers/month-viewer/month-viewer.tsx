import { Component, h, State, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
    tag: 'month-viewer',
    styleUrl: 'month-viewer.scss',
    shadow: true
})
export class MonthViewer {

    @State() months: { value: number, name: string, selected: boolean }[] = [];
    @Event() onSelectMonth!: EventEmitter;
    @Prop() selectedMonth = '';

    @State() notify = false;

    constructor() {
        this.getMonths();
    }

    componentDidLoad() {
        if (this.selectedMonth !== '') {
            const m = this.months.find(e => e.value === +this.selectedMonth);
            m.selected = true;
            this.notify = !this.notify;
        }
    }

    getMonths() {
        for (let i = 1; i <= 12; i++) {
            const d = new Date(`2000/${i}/01`);
            const month = d.toLocaleString('es-CO', { month: 'long' });
            this.months.push({
                value: i,
                name: month,
                selected: false
            });
        }
    }

    hostData() {
        return {
            class: {
                'input-calendar': true
            }
        };
    };

    selectMonth = (m) => {
        this.months.forEach(e => e.selected = false );
        m.selected = true;
        this.onSelectMonth.emit(m);
        this.notify = !this.notify;
    }

    render() {
        return (
            <div class="month-wrapper">
                <p class="month-wrapper__title">Selecciona el mes</p>
                <div class="month-wrapper__month-grid">
                    {
                        this.months.map((e) => {
                            const isSelectedStyle = `unit-month spacing selectable ${e.selected ? 'selected': ''}`;
                             return <div class={isSelectedStyle} onClick={() => this.selectMonth(e)}>{e.name}</div>
                        })
                    }
                </div>
            </div>
        );
    };
}
