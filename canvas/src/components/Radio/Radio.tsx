import React from "react";
import { Icon } from "../Icon";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export interface RadioProps extends SpaceProps {
  active?: boolean;
  activeColor?: string;
  color?: string;
  size?: number;
}

const RadioContainer = styled.div<RadioProps>`
  svg {
    stroke: ${p => (p.color ? p.color : "rgba(20,20,20,.6)")};
    transition: all 180ms ease-in-out;
    cursor: pointer;

    &:hover {
      stroke: ${p => (p.activeColor ? p.activeColor : "rgba(20,20,20,1)")};
    }
  }
  &.active svg {
    stroke: ${p => (p.activeColor ? p.activeColor : "rgba(20,20,20,1)")};
  }
`;

export const Radio: React.FC<RadioProps> = props => {
  const { active, size, ...otherProps } = props;

  return (
    <RadioContainer className={active ? "active" : undefined} {...otherProps}>
      {!active ? (
        <Icon icon="circle" size={size} />
      ) : (
        <Icon icon="check-circle" size={size} />
      )}
    </RadioContainer>
  );
};
