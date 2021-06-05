import React from "react";
import { Modal, Button, Form, Col, Image } from "react-bootstrap";
import { COLORS, images } from "../../../../constants";

// import { Container } from './styles';
interface Iprops {
  show: boolean;
  setShow: any;
}

const UpdatePerson: React.FC<Iprops> = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.setShow} centered>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                fontSize: 24,
                fontWeight: "bolder",
                color: COLORS.blackLight,
              }}
            >
              Atualizar Pessoa
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome Completo" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCPF">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="number" placeholder="CPF" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>telefone</Form.Label>
                <Form.Control type="phone" placeholder="(00)0-0000-0000" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCEP">
                <Form.Label>CEP</Form.Label>
                <Form.Control placeholder="00000-000" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDistrict">
                <Form.Label>Bairro</Form.Label>
                <Form.Control placeholder="Bairro" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
              <Form.Label>Endereço</Form.Label>
              <Form.Control placeholder="Rua 01, qd 10 Nº 23" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cidade</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridUF">
                <Form.Label>Estado</Form.Label>
                <Form.Control as="select" defaultValue="Escolha o estado...">
                  <option>Escolha...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={props.setShow}>
              <Image
                src={images.close}
                rounded
                width="16"
                height="16"
                style={{ marginRight: 5 }}
              />
              Cancelar
            </Button>
            <Button variant="primary" onClick={props.setShow}>
              <Image
                src={images.save}
                rounded
                width="16"
                height="16"
                style={{ marginRight: 5 }}
              />
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default UpdatePerson;
