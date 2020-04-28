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
