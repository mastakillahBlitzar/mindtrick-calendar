# mt-calendar



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type     | Default        |
| ------------- | ------------- | ----------- | -------- | -------------- |
| `endyear`     | `endyear`     |             | `number` | `undefined`    |
| `format`      | `format`      |             | `string` | `'YYYY/MM/DD'` |
| `initialyear` | `initialyear` |             | `number` | `undefined`    |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `selectedDay` |             | `CustomEvent<any>` |


## Methods

### `geValue() => Promise<string>`



#### Returns

Type: `Promise<string>`




## Dependencies

### Depends on

- [year-viewer](../viewers/year-viewer)
- [month-viewer](../viewers/month-viewer)
- [day-viewer](../viewers/day-viewer)
- [input-calendar](../input-calendar)

### Graph
```mermaid
graph TD;
  mt-calendar --> year-viewer
  mt-calendar --> month-viewer
  mt-calendar --> day-viewer
  mt-calendar --> input-calendar
  style mt-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
