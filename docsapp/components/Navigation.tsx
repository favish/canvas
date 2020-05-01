import React from 'react'
import Link from 'next/link'
import { Sans, BorderBox } from '@rsbear/canvas'

const Navigation: React.FC<{}> = () => {
  return (
    <BorderBox borderRightWidth={1} borderColor="pink" pr={40}>
      <Sans fontSize={18} fontWeight={600} color="black">
        @rsbear/canvas
      </Sans>
      <Sans fontSize={14} fontWeight={600} textTransform="uppercase" mt={20}>
        Wrappers
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/globalstyles">
          <a>GlobalStyles</a>
        </Link>
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/theme">
          <a>Theme</a>
        </Link>
      </Sans>
      <Sans fontSize={14} fontWeight={600} textTransform="uppercase" mt={20}>
        Divs
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/box">
          <a>Box</a>
        </Link>
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/borderbox">
          <a>BorderBox</a>
        </Link>
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/flex">
          <a>Flex</a>
        </Link>
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/grid">
          <a>Grid</a>
        </Link>
      </Sans>
      <Sans fontSize={14} fontWeight={600} textTransform="uppercase" mt={20}>
        Buttons &amp; Inputs
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/button">
          <a>Button</a>
        </Link>
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/buttondropdown">
          <a>ButtonDropdown</a>
        </Link>
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/input">
          <a>Input</a>
        </Link>
      </Sans>
      <Sans fontSize={14} fontWeight={600} textTransform="uppercase" mt={20}>
        Dialogs
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/notify">
          <a>Notify</a>
        </Link>
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/tooltip">
          <a>Tooltip</a>
        </Link>
      </Sans>
      <Sans fontSize={14}>
        <Link href="/[slug]" as="/modal">
          <a>Modal</a>
        </Link>
      </Sans>
      <Sans fontSize={14} fontWeight={600} textTransform="uppercase" mt={20}>
        Loaders
      </Sans>
      <Sans fontSize={14}>
        <a href="/icon">Icon</a>
      </Sans>
      <Sans fontSize={14}>
        <a href="/radio">Radio</a>
      </Sans>
      <Sans fontSize={14}>
        <a href="/image">Image</a>
      </Sans>
    </BorderBox>
  )
}

export default Navigation
