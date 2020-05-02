import React from 'react'
import { Radio } from '@rsbear/canvas'

const RadioExample: React.FC<any> = () => {
  const [sortBy, setSortBy] = React.useState('')

  return (
    <>
      <Radio
        active={sortBy === 'dateDesc'}
        text="Date descending"
        onClick={() => setSortBy('dateDesc')}
      />
    </>
  )
}

export default RadioExample
