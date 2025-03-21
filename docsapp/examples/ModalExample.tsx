import React, { useEffect, useRef, useState } from 'react'
import {
  Flex,
  Button,
  Box,
  // Modal,
  LoadingDots,
  Sans,
  Divider,
} from '@favish/canvas'

import { createPortal } from 'react-dom'
import { RemoveScroll } from 'react-remove-scroll'
// import { useCursor } from "use-cursor"
import styled from 'styled-components'

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
  WidthProps,
} from 'styled-system'

interface MaskProps {
  maskBg?: string
  zIndex?: number
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
  overflowY?: 'auto' | 'hidden' | 'scroll' | 'visible'
  overflowX?: 'auto' | 'hidden' | 'scroll' | 'visible'
  overflow?: 'auto' | 'hidden' | 'scroll' | 'visible'
}

interface ModalProps extends MaskProps, ContentProps {
  open: boolean
  setOpen: Function
  children?: JSX.Element
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
  z-index: ${(p) => p.zIndex};
  ${(p) =>
    !p.maskBg
      ? `background-color: rgba(215,215,215,.6)`
      : `background-color: ${p.maskBg}`}
`

const Content = styled.div<ContentProps>`
  position: relative;
  max-width: 80%;
  padding: 40px;
  background: white;
  box-shadow: 0px 2px 24px rgba(10, 10, 10, 0.2);
  overflow: ${(p) => p.overflow};
  overflow-x: ${(p) => p.overflowX};
  overflow-y: ${(p) => p.overflowY};
  ${borders};
  ${height};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${shadow};
  ${space};
  ${width};
`

export const DEFAULT_MODAL_Z_INDEX = 9999

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  '[tabindex="0"]',
].join(', ')

export const Modal: React.FC<ModalProps> = (props) => {
  const scrollIsolationEl = useRef<HTMLDivElement | null>(null)
  // const openCallback = React.useCallback(() => {
  //   props.setOpen(false)
  // }, [props.setOpen])
  // const [ref] = useOutsideClick(openCallback)

  const wrapperRef = useRef(null)

  useEffect(() => {
    if (wrapperRef.current === null && typeof document !== 'undefined') {
      const div = document.createElement('div')
      div.setAttribute('id', 'modalRoot')
      wrapperRef.current = div
    }

    const wrapper = wrapperRef.current
    if (!wrapper || typeof document === 'undefined') {
      return
    }
    document.body.appendChild(wrapper)
    return () => {
      document.body.removeChild(wrapper)
    }
  }, [])

  const { maskBg, zIndex, children, ...rest } = props

  const modalEl = (
    <>
      {!props.open ? null : (
        <Mask maskBg={maskBg} zIndex={zIndex}>
          <Content {...rest}>{children}</Content>
        </Mask>
      )}
    </>
  )

  return wrapperRef
    ? wrapperRef.current && createPortal(modalEl, wrapperRef.current)
    : null
}

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Box>
      <Flex>
        <Button
          mr={2}
          role="button"
          text="Primary"
          onClick={() => setShowModal(true)}
        />
      </Flex>
      <Modal
        open={showModal}
        setOpen={setShowModal}
        maxWidth={400}
        maskBg="rgba(215,215,215,.6)"
        borderRadius={5}
      >
        <Flex flexDirection="column" justifyContent="center">
          <Sans fontWeight={600} textAlign="center" mb={2}>
            Welcome!
          </Sans>
          <Divider />
          <Sans>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            asperiores voluptas maxime harum tenetur laborum ex necessitatibus!
            Quia maiores asperiores natus quos esse debitis! Deleniti beatae
            dolorem cumque incidunt iusto! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dolorum esse fugit suscipit. Deleniti
            optio perferendis minima alias veritatis labore ut eligendi
            distinctio magnam nostrum dolorum ex, facilis recusandae similique.
            Deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum corrupti, suscipit vero alias fugit eius ut tempora
            reiciendis exercitationem! Voluptatem ipsa excepturi beatae
            architecto facilis quam perspiciatis eius saepe asperiores.
          </Sans>
          <Button
            role="button"
            text="Close"
            mt={20}
            onClick={() => setShowModal(false)}
          />
        </Flex>
      </Modal>
    </Box>
  )
}

// const ModalExample: React.FC<any> = () => {
//   const [isOpen, setIsOpen] = React.useState(false)

//   return (
//     <Box>
//       <Flex>
//         <Button
//           mr={2}
//           role="button"
//           text="Primary"
//           onClick={() => setIsOpen(true)}
//         />
//       </Flex>
//       <Modal
//         open={isOpen}
//         setOpen={setIsOpen}
//         maxWidth={400}
//         maskBg="rgba(215,215,215,.6)"
//         borderRadius={5}
//       >
//         <Flex flexDirection="column" justifyContent="center">
//           <Sans fontWeight={600} textAlign="center" mb={2}>
//             Welcome!
//           </Sans>
//           <Divider />
//           <Sans>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
//             asperiores voluptas maxime harum tenetur laborum ex necessitatibus!
//             Quia maiores asperiores natus quos esse debitis! Deleniti beatae
//             dolorem cumque incidunt iusto! Lorem ipsum dolor sit amet
//             consectetur, adipisicing elit. Dolorum esse fugit suscipit. Deleniti
//             optio perferendis minima alias veritatis labore ut eligendi
//             distinctio magnam nostrum dolorum ex, facilis recusandae similique.
//             Deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Voluptatum corrupti, suscipit vero alias fugit eius ut tempora
//             reiciendis exercitationem! Voluptatem ipsa excepturi beatae
//             architecto facilis quam perspiciatis eius saepe asperiores.
//           </Sans>
//           <Button
//             role="button"
//             text="Close"
//             mt={20}
//             onClick={() => setIsOpen(false)}
//           />
//         </Flex>
//       </Modal>
//     </Box>
//   )
// }

export default ModalExample
