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
      <Radio
        active={sortBy === 'dateAsc'}
    activeColor="dodgerblue"
        text="Date ascending"
    size={24}
        onClick={() => setSortBy('dateAsc')}
      />

    </>
  )
}

export default RadioExample
