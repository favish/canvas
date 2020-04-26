import React from "react";
import styled from "styled-components";
import useOutsideClick from "../../hooks/useOutsideClick";
import {
  borders,
  BordersProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  shadow,
  ShadowProps,
  SpaceProps,
  space,
} from "styled-system";

interface MaskProps {
  maskBg?: string;
}

interface ContentProps
  extends BordersProps,
    MaxHeightProps,
    MaxWidthProps,
    ShadowProps,
    SpaceProps {}

interface ModalProps extends MaskProps, ContentProps {
  open: boolean;
  setOpen: Function;
  children?: JSX.Element;
}

const Mask = styled.div<MaskProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${(p) =>
    !p.maskBg
      ? `background-color: rgba(215,215,215,.6)`
      : `background-color: ${p.maskBg}`}
`;

const Content = styled.div<ContentProps>`
  max-width: 80%;
  padding: 40px;
  background: white;
  box-shadow: 0px 2px 24px rgba(10, 10, 10, 0.2);
  overflow: auto;

  ${borders};
  ${maxHeight};
  ${maxWidth};
  ${shadow};
  ${space};
`;

export const Modal: React.FC<ModalProps> = (props) => {
  const openCallback = React.useCallback(() => {
    props.setOpen(false);
  }, [props.setOpen]);
  const [ref] = useOutsideClick(openCallback);

  const { maskBg, children, ...rest } = props;

  if (!props.open) {
    return null;
  } else {
    return (
      <Mask maskBg={maskBg}>
        <Content ref={ref} {...rest}>
          {children}
        </Content>
      </Mask>
    );
  }
};
