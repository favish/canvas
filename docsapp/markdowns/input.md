---
layout: page
title: 'Input'
body: "Input component"
note: ""
types: '{ 
  "display": "block | inline-block",
  "error": "boolean",
  "activeBorder?": "string",
  "activeShadow?": "string",
  "error?": "boolean",
  "border?": "string",
  "borderColor?": "string",
  "borderRadius?": "string | number",
  "borderWidth?": "string | number"
  }'
---

```jsx
const [value, setValue] = React.useState<string | null>("");
const [submitting, setSubmitting] = React.useState(false);
const [err, setErr] = React.useState(false);

return (
  <Box>
    <Input
      fontSize={14}
      placeholder="email"
      error={err}
      icon={<Icon icon="mail" size={18} mx={2} strokeWidth={1} />}
      onChange={(e) => setValue(e.target.value)}
    />
    <Button
      role="button"
      text="Log in"
      my={2}
      width={1}
      variant="primary"
      loading={submitting}
      loader={<LoadingDots bg="white" />}
      onClick={handleSubmit}
    />
  </Box>
);
 ```
