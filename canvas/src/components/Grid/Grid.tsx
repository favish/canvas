import React from "react";
import styled from "styled-components";
import {
  height,
  HeightProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  width,
  WidthProps
} from "styled-system";

export interface GridProps
  extends HeightProps,
    PositionProps,
    SpaceProps,
    WidthProps {
  preset?: 1 | 2 | 3 | 4 | 5;
  rowGap?: number;
  columnGap?: number;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  ${space}
  ${position};
  ${height};
  ${width};

  ${p =>
    p.preset &&
    `
    grid-template-columns: repeat(${p.preset}, 1fr);
    grid-column-gap: ${p.columnGap ? `${p.columnGap}px` : `0px`};
    grid-row-gap: ${p.rowGap ? `${p.rowGap}px` : `0px`};
  `}
`;
