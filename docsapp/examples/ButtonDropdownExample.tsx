import React from 'react'
import { Box, ButtonDropdown, MenuItem } from '@rsbear/canvas'

const ButtonDropdownExample: React.FC<any> = () => {
  const [state, setState] = React.useState('Popularity')
  return (
    <Box width="50%">
      <ButtonDropdown
        text={state}
        m={3}
        borderRadius={4}
        textAlign="center"
        variant="primary"
        color="white"
      >
        <MenuItem
          text="Popularity"
          fontSize={14}
          p={1}
          onClick={() => setState('popularity')}
        />
        <MenuItem
          text="Newest"
          fontSize={14}
          p={1}
          hoverBg="pink"
          onClick={() => setState('newest')}
        />
        <MenuItem
          text="Oldest"
          fontSize={14}
          p={1}
          onClick={() => setState('oldest')}
        />
      </ButtonDropdown>
    </Box>
  )
}

export default ButtonDropdownExample
