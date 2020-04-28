import React from 'react'
import NotifyExample from './NotifyExample'
import ButtonExample from './ButtonExample'
import ButtonDropdownExample from './ButtonDropdownExample'
import InputExample from './InputExample'
import TooltipExample from './TooltipExample'
import ModalExample from './ModalExample'
import ImageExample from './ImageExample'
import IconExample from './IconExample'
import FlexExample from './FlexExample'
import RadioExample from './RadioExample'

const ExampleRouter: React.FC<any> = ({ route }) => {
  return (
    <>
      {route === 'button' && <ButtonExample />}
      {route === 'buttondropdown' && <ButtonDropdownExample />}
      {route === 'flex' && <FlexExample />}
      {route === 'icon' && <IconExample />}
      {route === 'image' && <ImageExample />}
      {route === 'input' && <InputExample />}
      {route === 'notify' && <NotifyExample />}
      {route === 'modal' && <ModalExample />}
      {route === 'radio' && <RadioExample />}
      {route === 'tooltip' && <TooltipExample />}
    </>
  )
}

export default ExampleRouter
