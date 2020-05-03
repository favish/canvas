import React from 'react'
import NotifyExample from './NotifyExample'
import ButtonExample from './ButtonExample'
import ButtonDropdownExample from './ButtonDropdownExample'
import InputExample from './InputExample'
import TooltipExample from './TooltipExample'
import ModalExample from './ModalExample'
import GridExample from './GridExample'
import ImageExample from './ImageExample'
import IconExample from './IconExample'
import FlexExample from './FlexExample'
import RadioExample from './RadioExample'
import TagExample from './TagExample'

const ExampleRouter: React.FC<any> = ({ route }) => {
  return (
    <>
      {route === 'button' && <ButtonExample />}
      {route === 'buttondropdown' && <ButtonDropdownExample />}
      {route === 'flex' && <FlexExample />}
      {route === 'grid' && <GridExample />}
      {route === 'icon' && <IconExample />}
      {route === 'image' && <ImageExample />}
      {route === 'input' && <InputExample />}
      {route === 'notify' && <NotifyExample />}
      {route === 'modal' && <ModalExample />}
      {route === 'radio' && <RadioExample />}
      {route === 'tag' && <TagExample />}
      {route === 'tooltip' && <TooltipExample />}
    </>
  )
}

export default ExampleRouter
