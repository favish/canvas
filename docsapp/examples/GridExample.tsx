import React from 'react'
import { Flex, BorderBox, Grid } from '@favish/canvas'

const GridExample: React.FC<any> = () => {
  const test = ['purple', 'pink', 'lightsalmon', 'lightskyblue', 'indianred']
  return (
    <Grid preset={3} columnGap={20} rowGap={20}>
      {test.map(x => (
        <Flex height="200px" width="100%" background={x} key={x} />
      ))}
    </Grid>
  )
}

export default GridExample
