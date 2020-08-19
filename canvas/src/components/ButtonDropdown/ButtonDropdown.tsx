import React from "react";

import styled from "styled-components";
import useOutsideClick from "./../../hooks/useOutsideClick";
import { ButtonProps, Button } from "../Button/Button";
import { Box } from "../Box/Box";

export interface ButtonDropdownProps extends ButtonProps {
  children?: any;
  text: string;
}

const DropBackground = styled.div<any>`
  position: absolute;
  width: 100%;
  background: white;
  box-shadow: 1px 4px 12px rgba(10, 10, 10, 0.1);
  border-radius: 5px;
`;

export const ButtonDropdown = (props: ButtonDropdownProps) => {
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);
  const openCallback = React.useCallback(() => {
    setShowDropdown(false);
  }, [setShowDropdown]);
  const [ref] = useOutsideClick(openCallback);

  const handleOpen = () => {
    setShowDropdown(!showDropdown);
  };

  const { children, text, width, minWidth, maxWidth, ...otherProps } = props;

  return (
    <Box
      ref={ref}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
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
  );
};
