import { AlertMessage } from "components";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col, Image, Spinner } from "react-bootstrap";
import { COLORS, images } from "constants/index";
import { useForm } from "react-hook-form";
import { IBuilding, defaultBuilding } from "interfaces/index";
import { postBuilding } from "services/building";
import { ModalTitle } from "./styles";

interface Iprops {
  show: boolean;
  setShow: any;
  handlerUpdateList: any;
  proprietaryId: number;
}

const CreateBuilding: React.FC<Iprops> = (props) => {
  const { show, setShow, handlerUpdateList, proprietaryId } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    setValue,
  } = useForm<IBuilding>();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string>();
  const [showError, setShowError] = useState<boolean>();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultBuilding);
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    setValue("proprietary", proprietaryId);
  }, [proprietaryId, setValue]);

  const handleOnSubmit = async (building: IBuilding) => {
    const data = await postBuilding(building);
    if (data.id) {
      setLoading(false);
      handlerUpdateList();
      setShow(false);
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
      <Modal show={show} onHide={setShow} centered>
        {showError ? (
          <AlertMessage
            show={showError}
            setShow={() => setShowError(!showError)}
            error={apiError}
          />
        ) : (
          <Form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
            <Modal.Header closeButton>
              <ModalTitle>Novo Imóvel</ModalTitle>
            </Modal.Header>
            <Modal.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress">
                  <Form.Label>Endereço</Form.Label>
                  <Form.Control
                    {...register("address", {
                      required: false,
                      maxLength: 200,
                    })}
                    type="text"
                    placeholder="Rua 01, qd 10 Nº 23"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridComplement">
                  <Form.Label>Complemnto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Complemento"
                    {...register("complement", { required: false })}
                  />
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={setShow}>
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

export default CreateBuilding;
