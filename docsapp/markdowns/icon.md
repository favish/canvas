---
title: 'Icon'
body: "Div container component with flex properties"
---

```jsx
<Flex>
  <Icon icon="activity" color="pink" size={62} mr={2} />
  <Icon icon="at-sign" color="teal" size={62} mr={2} />
  <Icon icon="mail" color="indianred" size={62} />
</Flex>
 ```
```
 interface IconProps {
  icon: IconEnum;
  color?: string; 
  fill?: string;
  size?: number; //this is a number but it gets composed as px
  stroke?: string; //idk why i have this
  strokeWidth?: number | string;
 }
 ```
