---
layout: page
title: 'Tag'
body: 'Div container component with flex properties'
note: ''
---

```jsx
<Flex flexWrap="wrap">
  {activeTags.map((x: string, i: number) => (
    <Tag
      active={true}
      text={x}
      mr={1}
      onClick={() => onRemoveActiveTag(x)}
      bg="rgba(60,180,230,.1)"
      color="#005FD7"
      hoverColor="rgba(60,180,230,.2)"
      key={i}
    />
  ))}
  {suggestedTags.map((x: string, i: number) => (
    <Tag
      active={false}
      text={x}
      key={i}
      mr={1}
      onClick={() => onAddActiveTag(x)}
    />
  ))}
</Flex>
```

## All spacing props are available.

| prop      | css value      | type               |
| --------- | -------------- | ------------------ |
| active    | position       | string             |
| text      | flex           | string             |
| onClick   | flex-direction | string             |
| flexBasis | flex-basis     | number \|string    |
| flexGrow  | flex-grow      | number             |
| flexWrap  | flex-wrap      | "wrap" \| "nowrap" |
