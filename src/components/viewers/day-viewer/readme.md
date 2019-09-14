# day-viewer



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type             | Default     |
| --------------- | --------------- | ----------- | ---------------- | ----------- |
| `selectedDate`  | `selected-date` |             | `string`         | `undefined` |
| `selectedDates` | --              |             | `CalendarDate[]` | `[]`        |
| `selectedDay`   | `selected-day`  |             | `string`         | `''`        |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `onSelectDay` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [mt-calendar](../../mt-calendar)

### Graph
```mermaid
graph TD;
  mt-calendar --> day-viewer
  style day-viewer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
