import React from 'react'
import { Flex, BorderBox } from '@rsbear/canvas'

const FlexExample: React.FC<any> = () => {
  return (
    <>
      <Flex justifyContent="space-between" width="20%">
        <BorderBox
          borderRadius={4}
          height={60}
          width={60}
          background="lightpink"
        />
        <BorderBox
          borderRadius={4}
          height={60}
          width={60}
          background="lightskyblue"
        />
      </Flex>
      <Flex
        justifyContent="space-between"
        flexDirection="row-reverse"
        width="30%"
        mt={2}
      >
        <BorderBox
          borderRadius={4}
          height={60}
          width={60}
          background="lightgreen"
        />
        <BorderBox
          borderRadius={4}
          height={60}
          width={60}
          background="lightsalmon"
        />
      </Flex>
      <Flex flexDirection="column" alignItems="center" width="10%" mt={2}>
        <BorderBox
          borderRadius={4}
          height={60}
          width={60}
          background="plum"
          mb={1}
        />
        <BorderBox
          borderRadius={4}
          height={60}
          width={60}
          background="tomato"
        />
      </Flex>
    </>
  )
}

export default FlexExample
