import React from "react";
import { Container, CustomAlert, Heading } from "./styles";

interface Iprops {
  show: boolean;
  setShow: any;
  error: any;
}

const AlertMessage: React.FC<Iprops> = (props) => {
  if (props.show) {
    return (
      <Container>
        <CustomAlert
          variant="danger"
          onClose={() => props.setShow()}
          dismissible
        >
          <Heading>Oh, não! Você obteve um erro!</Heading>
          <p>{props.error}</p>
        </CustomAlert>
      </Container>
    );
  }
  return <></>;
};

export default AlertMessage;
