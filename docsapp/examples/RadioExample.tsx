import React, { Fragment } from 'react'
import { Flex, BorderBox, Icon, Sans } from '@favish/canvas'

import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export interface RadioContainerProps extends SpaceProps {
  activeColor?: string
  className?: string
  color?: string
  size?: number
}

export interface RadioProps extends RadioContainerProps {
  active?: boolean
  fontSize?: number | string
  fontWeight?: number
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  spacing?: string
  text?: string
}

const RadioContainer = styled.div<RadioContainerProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${space};
  svg {
    stroke: ${p => (p.color ? p.color : 'rgba(20,20,20,.6)')};
    transition: all 180ms ease-in-out;
    cursor: pointer;

    &:hover {
      stroke: ${p => (p.activeColor ? p.activeColor : 'rgba(20,20,20,1)')};
    }
  }
  &.active svg {
    stroke: ${p => (p.activeColor ? p.activeColor : 'rgba(20,20,20,1)')};
  }
`

export const Radio: React.FC<RadioProps> = props => {
  // other props are shit like spacing and activeColor
  const {
    active,
    fontSize,
    fontWeight,
    onClick,
    spacing,
    size,
    ...otherProps
  } = props

  return (
    <RadioContainer
      className={active ? 'active' : undefined}
      onClick={onClick}
      {...otherProps}
    >
      <Icon
        icon={!active ? 'circle' : 'check-circle'}
        size={18}
        mr={!spacing ? '10px' : spacing}
      />
      <Sans fontSize={fontSize} fontWeight={fontWeight}>
        Date descending
      </Sans>
    </RadioContainer>
  )
}

const RadioExample: React.FC<any> = () => {
  const [active, setActive] = React.useState('')

  return (
    <Fragment>
      <Radio
        active={active === 'dateDesc'}
        text="Date descending"
        onClick={() => setActive('dateDesc')}
      />
    </Fragment>
  )
}

export default RadioExample
