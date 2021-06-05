import { AlertMessage } from "components";
import React, { useState } from "react";
import { Modal, Button, Form, Col, Image, Spinner } from "react-bootstrap";
import { COLORS, images } from "../../../../constants";
import { PostPerson } from "../../../../services/person";
import { useForm } from "react-hook-form";

interface Iprops {
  show: boolean;
  setShow: any;
  handlerUpdateList: any;
}

const CreatePerson: React.FC<Iprops> = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string>();
  const [showError, setShowError] = useState<boolean>();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState<string>();
  const [cpf, setCPF] = useState<string>();
  const [cep, setCEP] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [city, setCity] = useState<string>();
  const [UF, setUF] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [cnpj, setCNPJ] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [bank, setBank] = useState<string>();
  const [account, setAccount] = useState<string>();
  const [agency, setAgency] = useState<string>();
  const [type, setType] = useState<string>("F");

  function changeType(value: boolean) {
    const isType = value ? "J" : "F";
    setType(isType);
  }

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    setValidated(true);

    const data = await PostPerson(
      name,
      cpf,
      address,
      district,
      city,
      UF,
      phone,
      cnpj,
      email,
      bank,
      account,
      agency,
      cep,
      type
    );
    console.log(data);
    if (data.name) {
      setLoading(false);
      props.handlerUpdateList();
      props.setShow(false);
    } else {
      if (!data.message.response) {
        setApiError(`Erro: ${data.message}`);
        setLoading(false);
        setShowError(true);
      } else {
        setApiError(
          `Erro: ${data.message.response.status} - ${data.message.response.statusText} ,
        ${data.message.response.data.message}
        `
        );
        setLoading(false);
        setShowError(true);
      }
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.setShow} centered>
        {showError ? (
          <AlertMessage
            show={showError}
            setShow={() => setShowError(!showError)}
            error={apiError}
          />
        ) : (
          <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: 24,
                  fontWeight: "bolder",
                  color: COLORS.blackLight,
                  alignItems: "center",
                }}
              >
                Nova Pessoa
                <div
                  style={{ fontSize: 16, fontWeight: 400, marginLeft: "5vw" }}
                >
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Pessoa Juridica"
                    onChange={(e: any) => changeType(e.target.checked)}
                  />
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    required
                    onChange={(e: any) => setName(e.target.value)}
                    type="text"
                    placeholder="Nome Completo"
                  />
                </Form.Group>
                {type === "F" ? (
                  <Form.Group as={Col} controlId="formGridCPF">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control
                      required
                      onChange={(e: any) => setCPF(e.target.value)}
                      type="text"
                      placeholder="CPF"
                    />
                  </Form.Group>
                ) : (
                  <Form.Group as={Col} controlId="formGridCNPJ">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                      required
                      onChange={(e: any) => setCNPJ(e.target.value)}
                      type="text"
                      placeholder="CNPJ"
                    />
                  </Form.Group>
                )}
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>telefone</Form.Label>
                  <Form.Control
                    required
                    onChange={(e: any) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="(00)0-0000-0000"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    onChange={(e: any) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCEP">
                  <Form.Label>CEP</Form.Label>
                  <Form.Control
                    required
                    onChange={(e: any) => setCEP(e.target.value)}
                    type="text"
                    placeholder="00000-000"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDistrict">
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control
                    required
                    onChange={(e: any) => setDistrict(e.target.value)}
                    type="text"
                    placeholder="Bairro"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  required
                  onChange={(e: any) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Rua 01, qd 10 Nº 23"
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    required
                    onChange={(e: any) => setCity(e.target.value)}
                    type="text"
                    placeholder="Cidade"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridUF">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    required
                    onChange={(e: any) => setUF(e.target.value)}
                    as="select"
                    defaultValue="Escolha o estado..."
                  >
                    <option>Escolha...</option>
                    <option>Ma</option>
                    <option>PI</option>
                    <option>PE</option>
                    <option>SP</option>
                    <option>RJ</option>
                    <option>MT</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridBank">
                  <Form.Label>Banco</Form.Label>
                  <Form.Control
                    required
                    onChange={(e: any) => setBank(e.target.value)}
                    placeholder="Banco"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAgency">
                  <Form.Label>Agência</Form.Label>
                  <Form.Control
                    required
                    onChange={(e: any) => setAgency(e.target.value)}
                    placeholder="Agência"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAccount">
                  <Form.Label>Conta Corrente</Form.Label>
                  <Form.Control
                    required
                    onChange={(e: any) => setAccount(e.target.value)}
                    placeholder="Conta Corrente"
                  />
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
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading
                  </>
                ) : (
                  <>
                    <Image
                      src={images.save}
                      rounded
                      width="16"
                      height="16"
                      style={{ marginRight: 5 }}
                    />
                    Salvar
                  </>
                )}
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default CreatePerson;
