import styled from "styled-components";

import {
  color as colorStyles,
  ColorProps,
  background,
  BackgroundProps,
  boxShadow,
  BoxShadowProps,
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
  WidthProps
} from "styled-system";

export interface BoxProps
  extends ColorProps,
    BackgroundProps,
    BoxShadowProps,
    HeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    PositionProps,
    WidthProps,
    SpaceProps {
  boxSizing?: "content-box" | "border-box";
  cursor?: "disabled" | "pointer" | "default" | "auto";
  display?: "block" | "inline-block";
  overflowY?: "auto" | "hidden" | "scroll" | "visible";
  overflowX?: "auto" | "hidden" | "scroll" | "visible";
  overflow?: "auto" | "hidden" | "scroll" | "visible";
  key?: string | number;
}

export const Box = styled.div<BoxProps>`
  display: ${p => p.display};
  overflow: ${p => p.overflow};
  overflow-x: ${p => p.overflowX};
  overflow-y: ${p => p.overflowY};
  cursor: ${p => (p.cursor ? p.cursor : "auto")};
  box-sizing: ${p => (p.boxSizing ? p.boxSizing : "content-box")};
  ${colorStyles};
  ${background};
  ${boxShadow};
  ${height};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${position};
  ${space};
  ${width};
`;

Box.displayName = "Box";
