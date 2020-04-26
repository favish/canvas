---
layout: page
title: 'Notify'
body: "A toast notification component"
note: ""
types: '
  { "position": "topleft | topcenter | topright | bottomright | bottomcenter | bottomleft" ,
  "timeout" : "number" ,
   "bg": "string" ,
   "color": "string" }
'
---

```jsx
<Notify position="topright" isOpen={true} timeout={2000} bg="black">
  Hello world!
</Notify>
 ```
