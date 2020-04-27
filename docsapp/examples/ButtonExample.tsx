import React from 'react'
import { Flex, Button, Box, LoadingDots, Icon } from '@rsbear/canvas'

const ButtonExample: React.FC<any> = () => {
  const [submitting, setSubmitting] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setSubmitting(false)
    }, 8000)
  }, [submitting])

  return (
    <Box>
      <Flex>
        <Button
          variant="primary"
          mr={2}
          role="button"
          text="Primary"
          minWidth="80px"
          loading={submitting}
          onClick={() => setSubmitting(true)}
        />
        <Button variant="secondary" mr={2} role="button" text="Secondary" />
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
  )
}

export default ButtonExample
