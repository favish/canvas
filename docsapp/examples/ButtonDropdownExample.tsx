import React from 'react'
import {
  Box,
  Flex,
  MenuItem,
  Button,
  ButtonStyleProps,
  Icon,
} from '@favish/canvas'

import styled from 'styled-components'
import useOutsideClick from './../hooks/useOutsideClick'
import {
  color as colorStyles,
  ColorStyleProps,
  height,
  HeightProps,
  // space,
  SpaceProps,
  borders,
  BorderProps,
} from 'styled-system'
import { ButtonProps } from './ButtonExample'

export interface ButtonDropdownProps extends ButtonProps {
  children?: any
  text: string
}

const DropBackground = styled.div<any>`
  position: absolute;
  width: 100%;
  background: white;
  box-shadow: 1px 4px 12px rgba(10, 10, 10, 0.1);
  border-radius: 5px;
`

const ButtonDropdown = (props: ButtonDropdownProps) => {
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false)
  const openCallback = React.useCallback(() => {
    setShowDropdown(false)
  }, [setShowDropdown])
  const [ref] = useOutsideClick(openCallback)

  const handleOpen = () => {
    setShowDropdown(!showDropdown)
  }

  const { children, text, width, ...otherProps } = props

  return (
    <Box
      ref={ref}
      width={props.width}
      maxWidth={props.maxWidth}
      minWidth={props.minWidth}
      position="relative"
    >
      <Button
        text={text}
        minWidth="100%"
        onClick={handleOpen}
        {...otherProps}
      />
      {showDropdown && (
        <DropBackground height={props.height}>{children}</DropBackground>
      )}
    </Box>
  )
}

const ButtonDropdownExample: React.FC<any> = () => {
  const [state, setState] = React.useState('Popularity')

  const handleState = (v) => {
    setState(v)
  }

  return (
    <Box width="100%">
      <ButtonDropdown
        text={state}
        maxWidth="80%"
        iconRight={<Icon icon="chevron-down" color="teal" ml="auto" />}
        border="solid 2px black"
        backgroundColor="transparent"
        color="black"
      >
        <MenuItem
          text="Popularity"
          fontSize={14}
          p={1}
          onClick={() => handleState('popularity')}
        />
        <MenuItem
          text="Newest"
          fontSize={14}
          p={1}
          hoverBg="pink"
          onClick={() => handleState('newest')}
        />
        <MenuItem
          text="Oldest"
          fontSize={14}
          p={1}
          onClick={() => handleState('oldest')}
        />
      </ButtonDropdown>
    </Box>
  )
}

export default ButtonDropdownExample
