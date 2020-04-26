import styled from "styled-components";

import {
  color as colorStyles,
  ColorStyleProps,
  background,
  BackgroundProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  height,
  HeightProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system";

export interface BoxProps
  extends ColorStyleProps,
    BackgroundProps,
    HeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    PositionProps,
    WidthProps,
    SpaceProps {
  display?: "block" | "inline-block";
  bg?: string;
  backgroundColor?: string;
  color?: string;
}

export const Box = styled.div<BoxProps>`
  display: ${(props) => props.display};
  ${colorStyles};
  ${background};
  ${height};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${position};
  ${space};
  ${width};
`;
