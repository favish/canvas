---
title: 'Grid'
body: 'Div container component with flex properties'
note: ''
---

```jsx
const test = ['purple', 'pink', 'lightsalmon', 'lightskyblue', 'indianred']
<GridGrid preset={3} columnGap={20}>
  {test.map(x => (
    <Flex height="200px" width="100%" background={x} key={x} />
  ))}
</Grid>
```

```
interface GridProps {
  preset?: number; //we're just creating a basic grid off of how many preset columns
  columnGap?: number;
  rowGrap?: number
}
```
