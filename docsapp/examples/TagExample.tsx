import React from 'react'
import { Icon } from '@rsbear/canvas'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  height,
  HeightProps,
  space,
  SpaceProps,
} from 'styled-system'

export interface TagContainerProps
  extends BorderProps,
    HeightProps,
    SpaceProps {
  activeColor?: string
  activeBorder?: string
  color?: string
  bg?: string
  backgroundColor?: string
}

export interface TagProps extends TagContainerProps {
  active?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  text?: string
}

const TagContainer = styled.button<TagContainerProps>`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 2px;
  background-color: #ebebeb;
  color: ${p => p.color};
  font-size: 13px;
  cursor: pointer;
  transition: all 180ms ease;
  ${border};
  ${color};
  ${height};
  ${space};

  span {
    margin-right: 8px;
  }

  & .divider {
    width: 1px;
    height: 14px;
    margin-right: 8px;
    background-color: ${p => p.color};
    opacity: 0.4;
  }

  &:hover {
    background-color: ${p => (p.activeColor ? p.activeColor : '#D4D4D4')};
    border: ${p => (p.activeBorder ? p.activeBorder : 0)};
  }
`

const Tag: React.FC<TagProps> = props => {
  const { active, color, onClick, text, ...otherProps } = props
  return (
    <TagContainer color={!color ? '#474747' : color} {...otherProps}>
      <span>{text}</span>
      <div className="divider" />
      {active && <Icon icon="x" size={10} color={!color ? '#474747' : color} />}
    </TagContainer>
  )
}

const TagExample: React.FC<any> = () => {
  return (
    <div>
      <Tag text="Hello world" active={true} />
    </div>
  )
}

export default TagExample
