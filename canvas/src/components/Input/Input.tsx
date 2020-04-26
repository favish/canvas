import React from "react";
import {
  color as colorStyles,
  ColorStyleProps,
  space,
  SpaceProps,
  height,
  width,
  HeightProps,
  WidthProps,
  TypographyProps,
  typography,
} from "styled-system";
import styled from "styled-components";

interface ContainerProps
  extends ColorStyleProps,
    HeightProps,
    SpaceProps,
    TypographyProps,
    WidthProps {
  activeBorder?: string;
  activeShadow?: string;
  error?: boolean;
  border?: string;
  borderColor?: string;
  borderRadius?: string | number;
  borderWidth?: string | number;
}

export interface InputProps extends ContainerProps {
  icon?: any;
  iconLeft?: any;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 40px;
  border-width: 1px;
  border-style: solid;
  transition: all 200ms ease;
  ${colorStyles};
  ${height};
  ${space};
  ${width};

  border: ${(props) => props.border && props.border};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "4px"};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "rgb(210,210,210)"};
  border-width: ${(props) => (props.borderWidth ? props.borderWidth : "1px")};

  ${(props) =>
    props.error &&
    `
      border: solid 1px #eb4559;
    `}

  input {
    border: 0;
    outline: 0;
    height: 100%;
    width: 90%;
    ${typography};
  }

  &:focus-within {
      border: ${(props) =>
        props.activeBorder
          ? props.activeBorder
          : "solid 1px rgba(20, 240, 160, 0.5);"}
      box-shadow: ${(props) =>
        props.activeShadow
          ? props.activeShadow
          : "0px 0px 0px 2px rgba(20, 240, 160, 0.4)"}
  }
`;

export const Input: React.FC<InputProps> = (props) => {
  const { onChange, placeholder, ...rest } = props;
  return (
    <Container {...rest}>
      {props.icon && props.icon}
      <input placeholder={placeholder} onChange={onChange} />
      {props.iconLeft && props.iconLeft}
    </Container>
  );
};
