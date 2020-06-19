import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom"
import { RemoveScroll } from "react-remove-scroll"
// import { useCursor } from "use-cursor"
import styled from "styled-components";

import {
  borders,
  BordersProps,
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
  shadow,
  ShadowProps,
  SpaceProps,
  space,
  width,
  WidthProps
} from "styled-system";

interface MaskProps {
  maskBg?: string;
  zIndex?: number;
}

interface ContentProps
  extends BordersProps,
    HeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    ShadowProps,
    SpaceProps,
    WidthProps {
  overflowY?: "auto" | "hidden" | "scroll" | "visible";
  overflowX?: "auto" | "hidden" | "scroll" | "visible";
  overflow?: "auto" | "hidden" | "scroll" | "visible";
}

interface ModalProps extends MaskProps, ContentProps {
  open: boolean;
  setOpen: Function;
  children?: JSX.Element;
  onClose: Function;
}

const ScrollIsolation = styled(RemoveScroll as any)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Mask = styled.div<MaskProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  z-index: ${p => p.zIndex};

  ${p =>
    !p.maskBg
      ? `background-color: rgba(215,215,215,.6)`
      : `background-color: ${p.maskBg}`}
`;

const Content = styled.div<ContentProps>`
  position: relative;
  max-width: 80%;
  padding: 40px;
  background: white;
  box-shadow: 0px 2px 24px rgba(10, 10, 10, 0.2);

  overflow: ${p => p.overflow};
  overflow-x: ${p => p.overflowX};
  overflow-y: ${p => p.overflowY};

  ${borders};
  ${height};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${shadow};
  ${space};
  ${width};
`;

export const DEFAULT_MODAL_Z_INDEX = 9999

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  '[tabindex="0"]',
].join(", ")

export const Modal: React.FC<ModalProps> = props => {
  const appendEl = useRef(document.createElement("div"))
  const containerEl = useRef<HTMLDivElement | null>(null)
  const scrollIsolationEl = useRef<HTMLDivElement | null>(null)

  const [focusableEls, setFocusableEls] = useState<HTMLElement[]>([])
  // const { index: focusableIndex, handlePrev, handleNext } = useCursor({
  //   max: focusableEls.length,
  // })

  // useEffect(() => {
  //   if (!focusableEls.length) return
  //   focusableEls[focusableIndex].focus()
  // }, [focusableEls, focusableIndex])

  const handleCloseClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === scrollIsolationEl.current) {
      props.onClose()
    }
  }

  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Escape":
        // Prevent <esc> from interfering with the returned focus
        event.preventDefault()
        event.stopPropagation()

        // Handle close
        return props.onClose()

      case "Tab":
        // Lock focus within modal
        event.preventDefault()
        event.stopPropagation()

        // Move focus up or down
        // event.shiftKey ? handlePrev() : handleNext()
        break
      default:
        break
    }
  }

  useEffect(() => {
    const { current } = appendEl

    const focusedElBeforeOpen = document.activeElement as HTMLElement

    // Append the dialog
    document.body.appendChild(current)

    // Gets the focusable elements
    const _focusableEls = Array.from(
      containerEl.current!.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    )
    setFocusableEls(_focusableEls)

    // Switches focus to the first focusable element
    _focusableEls.length && _focusableEls[0].focus()

    document.addEventListener("keydown", handleKeydown)

    return () => {
      // Remove the dialog
      document.body.removeChild(current)

      // Return the focus
      focusedElBeforeOpen.focus()

      document.removeEventListener("keydown", handleKeydown)
    }
  }, [])

  const { maskBg, zIndex, children, ...rest } = props;

  if (!props.open) {
    return null;
  } else {
    return (
      <Mask maskBg={maskBg} zIndex={zIndex}>
        <ScrollIsolation ref={scrollIsolationEl as any} onClick={handleCloseClick}>
          <Content {...rest}>
            {children}
          </Content>
        </ScrollIsolation>
      </Mask>
    );
  }
};
