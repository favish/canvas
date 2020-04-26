---
layout: page
title: 'ButtonDropdown'
body: "Button dropdown component aka select (needs improvements)"
note: ""
types: '
  { "variant": "primary | secondary | error" ,
    "size" : "default | small | tiny" ,
    "bg": "string",
    "backgroundColor": "string" ,
    "color": "string",
    "text": "string",
    "isLoading": "boolean",
    "loader": "Component" }
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