---
layout: page
title: 'Flex'
body: 'Div container component with flex properties'
note: ''
types: '{
  "m": "number",
  "my": "number",
  "mx": "number",
  "mt": "number",
  "mr": "number",
  "mb": "number"
  }'
---

```jsx
<Flex justifyContent="space-between" width="20%">
  <BorderBox height={60} width={60} bg="purple"/>
  <BorderBox borderRadius={4} height={60} width={60} bg="teal" />
</Flex>
<Flex justifyContent="space-between" flexDirection="row-reverse" mt={2}>
  <BorderBox height={60} width={60} bg="purple"/>
  <BorderBox borderRadius={4} height={60} width={60} background="teal" />
</Flex>
<Flex flexDirection="column" alignItems="center" width="10%" mt={2}>
  <BorderBox height={60} width={60} bg="purple" mb={1}/>
  <BorderBox borderRadius={4} height={60} width={60} background="teal" />
</Flex>
```

## All spacing props are available.

| prop           | css value       | type                                                      |
| -------------- | --------------- | --------------------------------------------------------- |
| position       | position        | string                                                    |
| flex           | flex            | string                                                    |
| flexDirection  | flex-direction  | string                                                    |
| flexBasis      | flex-basis      | number \|string                                           |
| flexGrow       | flex-grow       | number                                                    |
| flexWrap       | flex-wrap       | "wrap" \| "nowrap"                                        |
| justifyContent | justify-content | "flex-start" \| "center" \| "space-between" \| "flex-end" |
| alignItems     | align-items     | "flex-start" \| "center" \| "space-between" \| "flex-end" |
| maxHeight      | max-height      | number \| string                                          |
| minHeight      | min-height      | number \| string                                          |
| width          | width           | number \| string                                          |
| maxWidth       | max-width       | number \| string                                          |
| minWidth       | min-width       | number \| string                                          |
