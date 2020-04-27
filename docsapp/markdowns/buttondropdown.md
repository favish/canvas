---
layout: page
title: 'ButtonDropdown'
body: "Button dropdown component aka select (needs improvements)"
note: ""
types: '
'
---
```jsx
const [state, setState] = React.useState("Popularity");
return (
  <Box width="50%">
    <ButtonDropdown text={state}>
      <MenuItem
        text="Popularity"
        fontSize={14}
        p={1}
        icon={<Icon icon="heart" size={14} mr={1} />}
        onClick={() => setState("popularity")}
      />
      <MenuItem
        text="Newest"
        fontSize={14}
        p={1}
        icon={<Icon icon="arrow-up" size={14} mr={1} />}
        onClick={() => setState("newest")}
      />
      <MenuItem
        text="Oldest"
        fontSize={14}
        p={1}
        icon={<Icon icon="arrow-down" size={14} mr={1} />}
        onClick={() => setState("oldest")}
      />
    </ButtonDropdown>
  </Box>
);
 ```
 ```
 interface ButtonDropdownProps {
    bg?: string;
    backgroundColor?: string;
    color?: string;
    isLoading?: boolean;
    loader?: JSX.Element 
    size?: "default" | "small" | "tiny";
    text: string | JSX.Element; 
    variant?: "primary" | "secondary" | "error"; // if undefined,it renders primary
 }
 ```