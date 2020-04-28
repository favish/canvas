import React from 'react'
import { Flex, BorderBox, Grid } from '@rsbear/canvas'

const GridExample: React.FC<any> = () => {
  const test = ['purple', 'pink', 'lightsalmon', 'lightskyblue', 'indianred']
  return (
    <Grid preset={3} columnGap={20}>
      {test.map(x => (
        <Flex height="200px" width="100%" background={x} key={x} />
      ))}
    </Grid>
  )
}

export default GridExample
