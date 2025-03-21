import React from 'react'
import { Flex,  Box, LoadingSpinner, Icon } from '@favish/canvas'
import styled from "styled-components";

import {
  borders,
  BordersProps,
  color as colorStyles,
  ColorProps,
  height,
  HeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  width,
  WidthProps
} from "styled-system";

export interface ButtonStyleProps
  extends BordersProps,
    ColorProps,
    HeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    SpaceProps,
    TypographyProps,
    WidthProps {
  borderColor?: string;
  borderWidth?: number;
  color?: string;
  hoverBg?: string;
  justifyContent?: string;
  size?: "default" | "small";
  variant?: "primary" | "secondary" | "disabled";
  width?: number;
}

export interface ButtonProps extends ButtonStyleProps {
  disabled?: boolean;
  icon?: JSX.Element;
  iconRight?: JSX.Element;
  loading?: boolean;
  loader?: JSX.Element;
  onClick?: any;
  role?: "button" | "submit";
  text: string;
}

const ButtonStyle = styled.button<ButtonStyleProps>`
outline: 0;
padding-left: 20px;
padding-right: 20px;
color: white;
font-size: 14px;
font-weight: 600;
border-style: solid;
border-width: 0;
border-radius: 3px;
cursor: pointer;
transition: all 180ms ease;

display: flex;
justify-content: ${p => (p.justifyContent ? p.justifyContent : "center")};
align-items: center;

min-width: 100px;


&:disabled {
  cursor: none;
  background - color: gray;
}

${p =>
  (p.variant === "primary" || !p.variant) &&
  `
      height: 40px;
      background-color: rgb(40,40,40);
      ${colorStyles};
      ${minWidth};

      &:hover {
        opacity: ${p => (p.hoverBg ? p.hoverBg : "rgb(10,10,10)")};
      }
    `}

${props =>
  props.variant === "disabled" &&
  `
      height: 40px;
      cursor: not-allowed;
      background-color: rgb(230,230,230);
      ${colorStyles};
      ${minWidth};
    `}

${props =>
  props.variant === "secondary" &&
  `
      height: 40px;
      background-color: transparent;
      border-color: ${
        props.borderColor ? props.borderColor : "rgba(50,50,50,.2)"
      };
      border-width: ${props.borderWidth ? `${props.borderWidth}px` : "2px"};
      color: ${props.color ? props.color : "rgb(42,42,42)"};
      ${minWidth};

      &:hover {
        opacity: .7;
      }
    `}

${p =>
  p.size === "small" &&
  `
      font-size: 12px;
      height: ${p.height ? p.height : "24px"};
      min-width: 80px;
      ${minWidth};
    `}

${borders};
${colorStyles};
${height};
${maxHeight};
${maxWidth};
${minHeight};
${minWidth};
${space};
${typography};
${width};
`;

export const Button: React.FC<ButtonProps> = props => {
  const {
    disabled,
    icon,
    iconRight,
    text,
    loading,
    loader,
    onClick,
    role,
    ...rest
  } = props;

  const loaderNull = !loader ? <LoadingSpinner color={props.color} /> : loader;

  if (props.variant === "disabled") {
    return (
      <ButtonStyle onClick={() => {}} variant="disabled" {...rest}>
        {!loading ? text : loaderNull}
      </ButtonStyle>
    );
  }

  if (props.variant === "secondary") {
    return <ButtonStyle type={!role ? "button" : role} {...rest} />;
  }

  return (
    <>
      {!loading ? (
        <ButtonStyle onClick={onClick} type={!role ? "button" : role} {...rest}>
          {icon && icon}
          {!loading ? text : loaderNull}
          {iconRight && iconRight}
        </ButtonStyle>
      ) : (
        <ButtonStyle variant="disabled" {...rest}>
          {!loading ? text : loaderNull}
        </ButtonStyle>
      )}
    </>
  );
};

const ButtonExample: React.FC<any> = () => {
  const [submitting, setSubmitting] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setSubmitting(false)
    }, 8000)
  }, [submitting])

  return (
    <Box>
      <Flex mt={40}>
        <Button
          mr={2}
          role="button"
          text="Primary"
          variant="disabled"
          minWidth={500}
          justifyContent="flex-start"
          loading={submitting}
          onClick={() => setSubmitting(true)}
        />
        <Button variant="secondary" mr={2} role="button" text="Secondary" />
      </Flex>
      <Flex my={1}>
        <Button
          variant="primary"
          size="small"
          mr={2}
          role="button"
          text="Primary"
        />
        <Button
          variant="secondary"
          size="small"
          mr={2}
          role="button"
          text="Secondary"
        />
      </Flex>
    </Box>
  )
}

export default ButtonExample
