import React from "react";
import { Modal } from "@rsbear/canvas";

//////////////
export interface GetProps<P = {}> extends React.FC<P> {
  getInitialProps?: (context: any) => Promise<P>;
}

const Landing: GetProps<any> = ({ test }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <h1>Landing</h1>
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal open={isOpen} setOpen={setIsOpen} borderRadius="4px">
        {test}
      </Modal>
    </div>
  );
};

Landing.getInitialProps = async () => {
  const test = "yes";
  return { test };
};

export default Landing;
