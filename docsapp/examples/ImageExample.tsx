import React from 'react'
import { Box, Image, Flex } from '@rsbear/canvas'

const ImageExample: React.FC<any> = () => {
  return (
    <Flex>
      <Box width="300px">
        <Image shape="square" src="https://i.imgur.com/LRhMxie.png" />
      </Box>
      <Box width="400px" ml={1}>
        <Image shape="rect" src="https://i.imgur.com/oCaZJGC.png" />
      </Box>
    </Flex>
  )
}

export default ImageExample
