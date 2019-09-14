# year-viewer



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type     | Default |
| -------------- | --------------- | ----------- | -------- | ------- |
| `endYear`      | `end-year`      |             | `number` | `0`     |
| `initialYear`  | `initial-year`  |             | `number` | `1960`  |
| `selectedYear` | `selected-year` |             | `string` | `''`    |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `calendarFocus` |             | `CustomEvent<any>` |
| `onSelectYear`  |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [mt-calendar](../../mt-calendar)

### Graph
```mermaid
graph TD;
  mt-calendar --> year-viewer
  style year-viewer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
