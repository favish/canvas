---
layout: page
title: 'Radio'
body: 'Radio buttons'
---

```jsx
<Flex alignItems="center" onClick={() => setActive('first')}>
  <Radio active={active === 'first'} size={16} />
  <Sans fontSize={14} ml={1}>
    Date Descending
  </Sans>
</Flex>
<Flex alignItems="center" onClick={() => setActive('second')}>
  <Radio active={active === 'second'} size={16} activeColor="dodgerblue" />
  <Sans fontSize={14} ml={1}>
    Date Ascending
  </Sans>
</Flex>
```

## All spacing props are available.

| prop        | value                       | type                                        |
| ----------- | --------------------------- | ------------------------------------------- |
| active      | boolean                     | boolean                                     |
| activeColor | css color                   | string                                      |
| fontSize    | font-size                   | string \| number                            |
| fontWeight  | font-weight                 | number                                      |
| onClick     | event                       | e: React.MouseEvent<HTMLDivElement> => void |
| spacing     | space between icon and text | number \| string                            |
| text        | text-value                  | string                                      |
