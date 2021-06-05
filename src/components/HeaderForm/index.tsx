import React from "react";
import { Card, Button, Form, Col, Row, Image } from "react-bootstrap";
import { images } from "../../constants";

interface IProps {
  handleShowModal: any;
  handleSearch: any;
  handleCleaner: any;
  title: string;
  setValue: any;
  value: any;
}

const HeaderForm: React.FC<IProps> = (props) => {
  return (
    <div>
      <Card style={{ marginBottom: "20px" }}>
        <Card.Header as={Row}>
          <Col sm="10">
            <h3>{props.title}</h3>
          </Col>
          <Col sm="2" style={{ display: "flex", justifyContent: "right" }}>
            <Button
              variant="success"
              style={{
                height: "40px",
                width: "90%",
              }}
              onClick={props.handleShowModal}
            >
              <Image
                src={images.add}
                rounded
                width="16"
                height="16"
                style={{ marginRight: 5 }}
              />
              Novo
            </Button>
          </Col>
        </Card.Header>
        <Card.Body style={{ justifyContent: "center" }}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Col sm="8">
                <Form.Control
                  type="Buscar"
                  placeholder="Buscar..."
                  value={props.value}
                  onChange={(e: any) => props.setValue(e.target.value)}
                />
              </Col>
              <Col sm="2">
                <Button
                  variant="danger"
                  style={{
                    height: "40px",
                    width: "90%",
                  }}
                  onClick={props.handleCleaner}
                >
                  <Image
                    src={images.cleaner}
                    rounded
                    width="16"
                    height="16"
                    style={{ marginRight: 5 }}
                  />
                  Limpar
                </Button>
              </Col>

              <Col sm="2">
                <Button
                  variant="primary"
                  style={{
                    height: "40px",
                    width: "90%",
                  }}
                  onClick={props.handleSearch}
                >
                  <Image
                    src={images.search}
                    rounded
                    width="16"
                    height="16"
                    style={{ marginRight: 5 }}
                  />
                  Buscar
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HeaderForm;
