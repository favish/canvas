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

export interface RadioContainerProps extends SpaceProps {
  activeColor?: string;
  className?: string;
  color?: string;
  size?: number;
}

export interface RadioProps extends RadioContainerProps {
  active?: boolean;
  fontSize?: number | string;
  fontWeight?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  spacing?: string;
  text?: string;
}
