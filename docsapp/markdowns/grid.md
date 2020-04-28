---
title: 'Grid'
body: 'Div container component with flex properties'
note: ''
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
