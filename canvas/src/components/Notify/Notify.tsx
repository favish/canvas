import React from "react";
import styled from "styled-components";

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color as colorStyles,
} from "styled-system";
import { Flex } from "..";

export interface NotificationProps extends BackgroundProps, BorderProps {
  position?:
    | "topleft"
    | "topright"
    | "bottomright"
    | "bottomleft"
    | "topcenter"
    | "bottomcenter";
  color?: string;
  bg?: string;
  backgroundColor?: string;
}

const Notification = styled.div<NotificationProps>`
  position: fixed;
  background-color: black;
  border-radius: 5px;
  padding: 15px 20px;
  color: white;
  ${background};
  ${border};
  ${colorStyles};
  
  ${(props) =>
    props.position === "topleft" &&
    `
      top: 20px;
      left: 20px;
    `}
  
  ${(props) =>
    props.position === "topright" &&
    `
      top: 20px;
      right: 20px;
    `}
  
  ${(props) =>
    props.position === "bottomright" &&
    `
      bottom: 20px;
      right: 20px;
    `}
  
  ${(props) =>
    props.position === "bottomleft" &&
    `
      bottom: 20px;
      left: 20px;
    `}
  
  ${(props) =>
    props.position === "topcenter" &&
    `
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
    `}

  ${(props) =>
    props.position === "bottomcenter" &&
    `
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    `}
`;

interface NotifyProps extends NotificationProps {
  timeout?: number;
  isOpen: boolean;
  setIsOpen: Function;
}

export const Notify: React.FC<NotifyProps> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { children, timeout, isOpen, setIsOpen, ...rest } = props;

  React.useEffect(() => {
    setOpen(isOpen);

    if (!timeout) {
      return;
    }

    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
        setOpen(false);
      }, timeout);
    }
  }, [isOpen]);

  const closeOnClick = () => {
    setOpen(false);
    setIsOpen(open);
  };

  if (!open) {
    return null;
  }

  return (
    <Notification {...rest}>
      <Flex flexDirection="row" alignItems="center">
        <div>{children}</div>
        <Flex ml={15} onClick={closeOnClick}>
          x
        </Flex>
      </Flex>
    </Notification>
  );
};
