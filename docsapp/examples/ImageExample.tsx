import React from 'react'
import { Image } from '@rsbear/canvas'

const ImageExample: React.FC<any> = () => {
  return (
    <div>
      <h1>ImageExample</h1>
      <Image src="https://i.imgur.com/t1xZ2pK.png" shape="square" />
    </div>
  )
}

export default ImageExample
