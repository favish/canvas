import styled from "styled-components";

import {
  color as colorStyles,
  ColorProps,
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
  extends ColorProps,
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
}

export const Box = styled.div<BoxProps>`
  display: ${(p) => p.display};
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
