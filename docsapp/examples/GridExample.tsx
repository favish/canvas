import React from 'react'
import { Flex, BorderBox } from '@rsbear/canvas'
import styled from 'styled-components'

export interface GridProps {
  preset?: 1 | 2 | 3 | 4 | 5
  rowGap?: number
  columnGap?: number
}

const Grid = styled.div<GridProps>`
  display: grid;

  ${p =>
    p.preset === 1 &&
    `
    grid-template-columns: 100%;
    grid-row-gap: ${p.rowGap ? `${p.rowGap}px` : `0px`};
  `}

  ${p =>
    p.preset &&
    `
    grid-template-columns: repeat(${p.preset}, 1fr);
    grid-column-gap: ${p.columnGap ? `${p.columnGap}px` : `0px`};
    grid-row-gap: ${p.rowGap ? `${p.rowGap}px` : `0px`};
  `}
`

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
