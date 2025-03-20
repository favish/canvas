import React from 'react'
import { Sans, Flex, Tooltip } from '@favish/canvas'

const TooltipExample: React.FC<any> = () => {
  return (
    <Flex justifyContent="center">
      <Tooltip content="hello tooltip" bg="black" color="white" size="lg">
        <Sans textAlign="center">Hover me</Sans>
      </Tooltip>
    </Flex>
  )
}

export default TooltipExample
