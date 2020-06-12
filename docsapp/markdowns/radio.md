---
layout: page
title: 'Radio'
body: 'Radio buttons'
---

```jsx
<Fragment>
  <Radio
    active={active === 'dateDesc'}
    text="Date descending"
    onClick={() => setActive('dateDesc')}
  />
</Fragment>
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
