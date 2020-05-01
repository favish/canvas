---
title: 'Canvas'
---

Canvas is a design system that aims to be a solid foundation for styling React apps. Forget the ambiguity of traditional css classnames, style your elements directly from props.

The system is using styled-components and styled-system composed to give you the basic building blocks of widely used DOM elements. We're also leveraging typescript here so when you're building your app and forget if a component has a prop type, let the LSP help you with some autocomplete.

## Install this bad boy.

```code
yarn add @rsbear/canvas styled-components
yarn add --dev @types/styled-components @types/styled-system
```

## Spacing props pretty much always available

---

| prop   |        css value         | type             |
| ------ | :----------------------: | ---------------- |
| margin |          margin          | number \| string |
| m      |          margin          | number \| string |
| mx     | margin-left margin-right | number \| string |
| my     | margin-top margin-bottom | number \| string |
| mr     |       margin-right       | number \| string |
| mr     |       margin-left        | number \| string |

| prop    |         css value          | type             |
| ------- | :------------------------: | ---------------- |
| padding |          padding           | number \| string |
| p       |          padding           | number \| string |
| px      | padding-left padding-right | number \| string |
| py      | padding-top padding-bottom | number \| string |
| pr      |       padding-right        | number \| string |
| pr      |        padding-left        | number \| string |
