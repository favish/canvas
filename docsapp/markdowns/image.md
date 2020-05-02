---
layout: page
title: 'Image'
body: "Image thumbnail"
note: ""
---

```jsx
<Flex>
  <Box width="300px">
    <Image shape="square" src="https://i.imgur.com/LRhMxie.png" />
  </Box>
  <Box width="400px" ml={1}>
    <Image shape="rect" src="https://i.imgur.com/oCaZJGC.png" />
  </Box>
</Flex>
 ```

| prop           | css value       | type                                                      |
| -------------- | --------------- | --------------------------------------------------------- |
| src            | html value      | string                                                    |
| shape          | notcss          | string                                                    |
| alt?           | html value      | string                                                    |
