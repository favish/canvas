import React from 'react'
import NotifyExample from './NotifyExample'
import ButtonExample from './ButtonExample'
import ButtonDropdownExample from './ButtonDropdownExample'
import InputExample from './InputExample'
import TooltipExample from './TooltipExample'
import ModalExample from './ModalExample'
import ImageExample from './ImageExample'

const ExampleRouter: React.FC<any> = ({ route }) => {
  return (
    <>
      {route === '/notify' && <NotifyExample />}
      {route === '/button' && <ButtonExample />}
      {route === '/buttondropdown' && <ButtonDropdownExample />}
      {route === '/input' && <InputExample />}
      {route === '/tooltip' && <TooltipExample />}
      {route === '/modal' && <ModalExample />}
      {route === '/image' && <ImageExample />}
    </>
  )
}

export default ExampleRouter
