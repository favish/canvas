import React, { FC } from 'react'
import { Icon, Flex } from '@favish/canvas'

const IconExample: FC<any> = () => (
  <Flex>
    <Icon icon="activity" color="pink" size={62} mr={2} />
    <Icon icon="at-sign" color="teal" size={62} mr={2} />
    <Icon icon="mail" color="indianred" size={62} />
  </Flex>
)

export default IconExample
