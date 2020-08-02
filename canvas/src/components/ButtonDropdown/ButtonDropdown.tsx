import React from "react";
import styled from "styled-components";
import { Flex } from "../Flex";
import { Box } from "../Box";
import useOutsideClick from "./../../hooks/useOutsideClick";

import {
  color as colorStyles,
  ColorStyleProps,
  height,
  HeightProps,
  // space,
  SpaceProps,
  borders,
  BorderProps
} from "styled-system";
import { Icon } from "../Icon";

export interface ButtonMainProps
  extends BorderProps,
    ColorStyleProps,
    HeightProps,
    SpaceProps {
  bg?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  color?: string;
  textAlign?: "left" | "center" | "right";
  variant?: "primary" | "secondary" | "error";
}

export interface ButtonDropdownProps
  extends ButtonMainProps,
    ColorStyleProps,
    SpaceProps {
  color?: string;
  onChange?: Function;
  onClick?: Function;
  text: string | number;
}

const MainButton = styled.button<ButtonMainProps>`
  height: 40px;
  width: calc(100% - 40px);
  padding-left: 10px;
  padding-right: 10px;

  font-size: 14px;
  font-weight: 500;
  color: white;
  outline: 0;
  border: 0;
  border-right: 0;
  text-transform: capitalize;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: ${p => (p.borderRadius ? p.borderRadius : "4px")};
  border-bottom-left-radius: ${p => (p.borderRadius ? p.borderRadius : "4px")};

  ${colorStyles};
  ${height};

  ${p =>
    (!p.variant || p.variant === "primary") &&
    `
      background-color: black;
      color: white;
      border-style: solid;
      border-width: ${p.borderWidth ? p.borderWidth : "1px"};
      border-right-color: transparent;
      border-top-color: ${p.borderColor ? p.borderColor : "transparent"};
      border-left-color: ${p.borderColor ? p.borderColor : "transparent"};
      border-bottom-color: ${p.borderColor ? p.borderColor : "transparent"};
    `}

  ${props =>
    props.variant === "secondary" &&
    `
      background-color: white;
      color: rgb(50, 50, 50);
      border-style: solid;
      border-width: ${props.borderWidth ? props.borderWidth : "1px"};
      border-right-color: transparent;
      border-top-color: ${
        props.borderColor ? props.borderColor : "rgb(210,210,210)"
      };
      border-left-color: ${
        props.borderColor ? props.borderColor : "rgb(210,210,210)"
      };
      border-bottom-color: ${
        props.borderColor ? props.borderColor : "rgb(210,210,210)"
      };
    `}

  ${p =>
    p.variant === "error" &&
    `
      background-color: white;
      color: rgb(50, 50, 50);
      border-width: ${p.borderWidth ? p.borderWidth : "1px"};
      border-right-color: transparent;
      border-top-color: ${p.borderColor ? p.borderColor : "#eb4559"};
      border-left-color: ${p.borderColor ? p.borderColor : "#eb4559"};
      border-bottom-color: ${p.borderColor ? p.borderColor : "#eb4559"};
    `}

`;

// tesst
const DownArrow = styled.button<ButtonMainProps>`
  width: 40px;
  border-left: 0;
  border: 0;

  border-top-right-radius: ${p =>
    p.borderRadius ? `${p.borderRadius}px` : "4px"};
  border-bottom-right-radius: ${p =>
    p.borderRadius ? `${p.borderRadius}px` : "4px"};

  ${colorStyles};
  ${height};

  ${p =>
    (!p.variant || p.variant === "primary") &&
    `
      background-color: black;
      color: white;
      border-style: solid;
      border-width: ${p.borderWidth ? p.borderWidth : "1px"};
      border-left-color: transparent;
      border-top-color: ${p.borderColor ? p.borderColor : "transparent"};
      border-right-color: ${p.borderColor ? p.borderColor : "transparent"};
      border-bottom-color: ${p.borderColor ? p.borderColor : "transparent"};
    `}
    
  ${p =>
    p.variant === "secondary" &&
    `
      background-color: transparent;
      color: rgb(50, 50, 50);
      border-style: solid;
      border-width: ${p.borderWidth ? p.borderWidth : "1px"};
      border-left-color: transparent;
      border-top-color: ${p.borderColor ? p.borderColor : "rgb(210,210,210)"};
      border-right-color: ${p.borderColor ? p.borderColor : "rgb(210,210,210)"};
      border-bottom-color: ${
        p.borderColor ? p.borderColor : "rgb(210,210,210)"
      };
    `}
    
  ${p =>
    p.variant === "error" &&
    `
      background-color: white;
      color: rgb(50, 50, 50);
      border-style: solid;
      border-left-color: transparent;
      border-width: ${p.borderWidth ? p.borderWidth : "1px"};
      border-top-color: ${p.borderColor ? p.borderColor : "#eb4559"};
      border-right-color: ${p.borderColor ? p.borderColor : "#eb4559"};
      border-bottom-color: ${p.borderColor ? p.borderColor : "#eb4559"};
    `}

`;

const DropBackground = styled.div`
  position: absolute;
  width: 100%;
  background: white;
  box-shadow: 1px 4px 12px rgba(10, 10, 10, 0.1);
  border-radius: 5px;
`;

export const ButtonDropdown: React.FC<ButtonDropdownProps> = props => {
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);
  const openCallback = React.useCallback(() => {
    setShowDropdown(false);
  }, [setShowDropdown]);
  const [ref] = useOutsideClick(openCallback);

  const handleOpen = () => {
    setShowDropdown(true);
  };

  const { children, onChange, ...otherProps } = props;

  return (
    <Box width={1} ref={ref} position="relative">
      <Flex>
        <MainButton
          bg={props.bg}
          color={props.color}
          borderRadius={props.borderRadius}
          borderColor={props.borderColor}
          borderWidth={props.borderWidth}
          textAlign={props.textAlign}
          variant={props.variant}
        >
          {props.text}
        </MainButton>
        <DownArrow
          onClick={handleOpen}
          bg={props.bg}
          color={props.color}
          borderRadius={props.borderRadius}
          borderColor={props.borderColor}
          borderWidth={props.borderWidth}
          variant={props.variant}
        >
          <Icon icon="chevron-down" color={props.color} />
        </DownArrow>
      </Flex>
      {showDropdown && <DropBackground>{children}</DropBackground>}
    </Box>
  );
};
