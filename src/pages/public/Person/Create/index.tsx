import { AlertMessage } from "components";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col, Image, Spinner } from "react-bootstrap";
import { COLORS, images } from "constants/index";
import { postPerson } from "services/person";
import { useForm } from "react-hook-form";
import { IPerson } from "interfaces/index";
import { personDefault } from "interfaces/person";

interface Iprops {
  show: boolean;
  setShow: any;
  handlerUpdateList: any;
  idPerson?: number;
}

const CreatePerson: React.FC<Iprops> = (props) => {
  // const [person, SetPerson] = useState<IPerson>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<IPerson>();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string>();
  const [showError, setShowError] = useState<boolean>();
  const [type, setType] = useState<string>("F");

  function changeType(value: boolean) {
    const isType = value ? "J" : "F";
    setType(isType);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(personDefault);
    }
  }, [isSubmitSuccessful, reset]);

  /*   useEffect(() => {
    async function fetchPerson(id: number) {
      const data = await GetPerson(id);
      //SetPerson(data);
    }
    if (props.idPerson) {
      fetchPerson(props.idPerson);
    }
  }, [props]); */

  const handleOnSubmit = async (person: IPerson) => {
    const data = await postPerson(person);

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
          <Form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
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
                    {...register("type")}
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
                    style={{ borderColor: errors.name ? COLORS.red : null }}
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Nome Completo"
                  />
                </Form.Group>
                {type === "F" ? (
                  <Form.Group as={Col} controlId="formGridCPF">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control
                      style={{ borderColor: errors.cpf ? COLORS.red : null }}
                      required
                      {...register("cpf", {
                        required: type === "F" ? true : false,
                        maxLength: 14,
                        // eslint-disable-next-line no-useless-escape
                        pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                      })}
                      type="text"
                      placeholder="000.000.000-00"
                    />
                    {errors.cpf ? (
                      <div style={{ color: COLORS.redFont }}>CPF Invalido</div>
                    ) : null}
                  </Form.Group>
                ) : (
                  <Form.Group as={Col} controlId="formGridCNPJ">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                      style={{ borderColor: errors.cnpj ? COLORS.red : null }}
                      {...register("cnpj", {
                        required: type === "J" ? true : false,
                        maxLength: 18,
                        // eslint-disable-next-line no-useless-escape
                        pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
                      })}
                      type="text"
                      placeholder="00.000.000/0000-00"
                    />
                    {errors.cnpj ? (
                      <div style={{ color: COLORS.redFont }}>CNPJ Inválido</div>
                    ) : null}
                  </Form.Group>
                )}
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridMaritalStatus">
                  <Form.Label>Estado civil,</Form.Label>
                  <Form.Control
                    {...register("marital_status", {
                      required: true,
                    })}
                    as="select"
                    defaultValue="Escolha uma opção."
                  >
                    <option>Solteiro</option>
                    <option>Casado</option>
                    <option>Separado</option>
                    <option>Divorciado</option>
                    <option>Viúvo</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNacionality">
                  <Form.Label>Nacionalidade</Form.Label>
                  <Form.Control
                    style={{
                      borderColor: errors.nacionality ? COLORS.red : null,
                    }}
                    type="text"
                    placeholder="Nacionalidade"
                    {...register("nacionality", { required: true })}
                  />
                  {errors.nacionality ? (
                    <div style={{ color: COLORS.redFont }}>
                      Nacionalidade não pode ser nulo
                    </div>
                  ) : null}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>telefone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="(00)0-0000-0000"
                    {...register("phone", { required: false, maxLength: 14 })}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    style={{ borderColor: errors.email ? COLORS.red : null }}
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                  />
                  {errors.email ? (
                    <div style={{ color: COLORS.redFont }}>Email inválido</div>
                  ) : null}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCEP">
                  <Form.Label>CEP</Form.Label>
                  <Form.Control
                    style={{ borderColor: errors.cep ? COLORS.red : null }}
                    {...register("cep", {
                      required: false,
                      maxLength: 10,
                      pattern: /^[0-9]{5}-[\d]{3}$/i,
                    })}
                    type="text"
                    placeholder="00000-000"
                  />
                  {errors.cep ? (
                    <div style={{ color: COLORS.redFont }}>CEP Inválido</div>
                  ) : null}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDistrict">
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control
                    {...register("district", {
                      required: false,
                      maxLength: 155,
                    })}
                    type="text"
                    placeholder="Bairro"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  {...register("address", { required: false, maxLength: 200 })}
                  type="text"
                  placeholder="Rua 01, qd 10 Nº 23"
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    {...register("city", { required: true, maxLength: 200 })}
                    type="text"
                    placeholder="Cidade"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridUF">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    {...register("uf", { required: true, maxLength: 2 })}
                    as="select"
                    defaultValue="Escolha o estado..."
                  >
                    <option>AC</option>
                    <option>AL</option>
                    <option>AM</option>
                    <option>AP</option>
                    <option>BA</option>
                    <option>CE</option>
                    <option>DF</option>
                    <option>ES</option>
                    <option>GO</option>
                    <option>MA</option>
                    <option>MG</option>
                    <option>MT</option>
                    <option>MS</option>
                    <option>PA</option>
                    <option>PB</option>
                    <option>PE</option>
                    <option>PI</option>
                    <option>PR</option>
                    <option>RN</option>
                    <option>RO</option>
                    <option>RJ</option>
                    <option>RR</option>
                    <option>RS</option>
                    <option>SC</option>
                    <option>SE</option>
                    <option>SP</option>
                    <option>TO</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridBank">
                  <Form.Label>Banco</Form.Label>
                  <Form.Control
                    {...register("bank", { required: false, maxLength: 45 })}
                    placeholder="Banco"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAgency">
                  <Form.Label>Agência</Form.Label>
                  <Form.Control
                    {...register("agency", { required: false, maxLength: 45 })}
                    placeholder="Agência"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAccount">
                  <Form.Label>Conta Corrente</Form.Label>
                  <Form.Control
                    {...register("account", { required: false, maxLength: 45 })}
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
              <Button variant="primary" type="submit">
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
