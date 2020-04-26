import React from 'react'
import { Notify, Button } from '@rsbear/canvas'

const NotifyExample: React.FC<any> = () => {
  const [toast, setToast] = React.useState(false)

  return (
    <div>
      <Button
        role="button"
        text="You have a message waiting"
        onClick={() => setToast(true)}
      />
      <Notify
        position="topright"
        isOpen={toast}
        setIsOpen={() => setToast(!toast)}
        timeout={2000}
      >
        Suh dude!
      </Notify>
    </div>
  )
}

export default NotifyExample
