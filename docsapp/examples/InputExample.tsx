import React from 'react'
import { Box, Button, Icon, Input, LoadingDots } from '@rsbear/canvas'

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
        icon={<Icon icon="mail" size={16} mx={15} color="rgba(20,20,20,.6)" />}
        onChange={e => setValue(e.target.value)}
      />
      <Button
        role="button"
        text="Log in"
        my={2}
        width={1}
        loading={submitting}
        onClick={handleSubmit}
      />
    </Box>
  )
}

export default InputExample
