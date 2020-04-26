---
layout: page
title: 'Theme'
body: "Global theme object"
note: "Like all of the other components, this has entirely too many props. Button state is inherently relatively verbose for styling since it's important to render 3 states; clickable, loading, and disabled. As for the best approach on how to handle each state, that's going to require experience with the library so let's find out."
types: '
  {"theme": "Object"}
'
---

```jsx

const theme = {
  borders: ["1px solid", "2px solid"],
  breakpoints: [768, 900, 1024, 1192],
  colors: { black100: "#000",},
  mediaQueries: {},
  space: {},
  typeSizes: {
    sans: {},
    serif: {},
    },
  },
};


<Theme theme={theme}>
  <App />
</Theme>
 ```
