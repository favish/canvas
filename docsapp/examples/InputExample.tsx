import React from 'react'
import { Box, Button, Input, LoadingDots } from '@rsbear/canvas'

const InputExample: React.FC<any> = () => {
  const [value, setValue] = React.useState<string | null>('')
  const [submitting, setSubmitting] = React.useState(false)
  const [err, setErr] = React.useState(false)

  const handleSubmit = () => {
    event?.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setErr(true)
      setSubmitting(false)
    }, 2000)
  }

  return (
    <Box>
      <Input
        fontSize={14}
        placeholder="email"
        error={err}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        role="button"
        text="Log in"
        my={2}
        width={1}
        loading={submitting}
        loader={<LoadingDots bg="white" />}
        onClick={handleSubmit}
      />
    </Box>
  )
}

export default InputExample
