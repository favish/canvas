import React from 'react'
import { Flex, BorderBox, Icon, Radio, Sans } from '@rsbear/canvas'

const RadioExample: React.FC<any> = () => {
  const [active, setActive] = React.useState('')

  return (
    <>
      <Flex alignItems="center" onClick={() => setActive('first')}>
        <Radio active={active === 'first'} size={16} />
        <Sans fontSize={14} ml={1}>
          Date Descending
        </Sans>
      </Flex>
      <Flex alignItems="center" onClick={() => setActive('second')}>
        <Radio
          active={active === 'second'}
          size={16}
          activeColor="dodgerblue"
        />
        <Sans fontSize={14} ml={1}>
          Date Ascending
        </Sans>
      </Flex>
    </>
  )
}

export default RadioExample
