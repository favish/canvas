import React from 'react'
import {
  Flex,
  Button,
  Box,
  Modal,
  LoadingDots,
  Sans,
  Divider,
} from '@rsbear/canvas'

const ModalExample: React.FC<any> = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Box>
      <Flex>
        <Button
          mr={2}
          role="button"
          text="Primary"
          onClick={() => setIsOpen(true)}
        />
      </Flex>
      <Modal
        open={isOpen}
        setOpen={setIsOpen}
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
            onClick={() => setIsOpen(false)}
          />
        </Flex>
      </Modal>
    </Box>
  )
}

export default ModalExample
