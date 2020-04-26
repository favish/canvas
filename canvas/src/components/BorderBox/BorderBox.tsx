import styled from "styled-components";

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  bottom,
  BottomProps,
  color as colorStyles,
  ColorStyleProps,
  display,
  DisplayProps,
  height,
  HeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  order,
  OrderProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from "styled-system";

export interface BorderBoxProps
  extends BackgroundProps,
    BorderProps,
    BottomProps,
    ColorStyleProps,
    DisplayProps,
    HeightProps,
    MaxHeightProps,
    MaxWidthProps,
    OrderProps,
    PositionProps,
    SpaceProps,
    WidthProps,
    ZIndexProps {}

export const BorderBox = styled.div<BorderBoxProps>`
  border-style: solid;
  border-width: 0;
  ${background};
  ${border};
  ${bottom};
  ${colorStyles};
  ${display};
  ${height};
  ${maxHeight};
  ${maxWidth};
  ${order};
  ${position};
  ${space};
  ${width};
  ${zIndex};
`;
