---
layout: page
title: 'Button'
body: "Button component - click the main primary to see loading"
note: ""
types: '
  { "variant": "primary | secondary | disabled" ,
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
<Box>
  <Flex>
    <Button
      variant="primary"
      mr={2}
      role="button"
      text="Primary"
      isLoading={submitting}
      loader={<LoadingDots bg="white" />}
      onClick={() => setSubmitting(true)}
    />
    <Button 
      variant="secondary" 
      mr={2} 
      role="button" 
      text="Secondary" 
    />
  </Flex>
  <Flex my={1}>
    <Button
      variant="primary"
      size="small"
      mr={2}
      role="button"
      text="Primary"
    />
    <Button
      variant="secondary"
      size="small"
      mr={2}
      role="button"
      text="Secondary"
    />
  </Flex>
</Box>
 ```

#about this shit
