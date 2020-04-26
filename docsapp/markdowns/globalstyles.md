---
layout: page
title: 'Global styles'
body: "Set your apps Global css"
note: ""
types: '
  {"defaults": "css"}
'
---

```jsx
const globals = css`
  body {
    background-color: pink;
  }
`

<GlobalStyles defaults={globals}>
  <App />
</GlobalStyles>
 ```
