import React from "react";
import { images } from "constants/";
import {
  Container,
  CustomButton,
  CustomCard,
  CustomCol,
  CustomForm,
  CustomImage,
  CustomRow,
} from "./styles";

interface IProps {
  handleShowModal: any;
  handleSearch: any;
  handleCleaner: any;
  title: string;
  setValue: any;
  value: any;
}

const HeaderForm: React.FC<IProps> = (props) => {
  const {
    handleShowModal,
    handleSearch,
    handleCleaner,
    title,
    setValue,
    value,
  } = props;

  return (
    <Container>
      <CustomCard>
        <CustomCard.Header as={CustomRow}>
          <CustomCol sm="10">
            <h3>{title}</h3>
          </CustomCol>
          <CustomCol sm="2">
            <CustomButton variant="success" onClick={handleShowModal}>
              <CustomImage src={images.add} rounded width="16" height="16" />
              Novo
            </CustomButton>
          </CustomCol>
        </CustomCard.Header>
        <CustomCard.Body style={{ justifyContent: "center" }}>
          <CustomForm
            onSubmit={(e: any) => {
              e.preventDefault();
            }}
          >
            <CustomForm.Group as={CustomRow} controlId="formPlaintextPassword">
              <CustomCol sm="8">
                <CustomForm.Control
                  type="Buscar"
                  placeholder="Buscar..."
                  value={value}
                  onChange={(e: any) => setValue(e.target.value)}
                />
              </CustomCol>
              <CustomCol sm="2">
                <CustomButton variant="danger" onClick={handleCleaner}>
                  <CustomImage
                    src={images.cleaner}
                    rounded
                    width="16"
                    height="16"
                  />
                  Limpar
                </CustomButton>
              </CustomCol>

              <CustomCol sm="2">
                <CustomButton variant="primary" onClick={handleSearch}>
                  <CustomImage
                    src={images.search}
                    rounded
                    width="16"
                    height="16"
                  />
                  Buscar
                </CustomButton>
              </CustomCol>
            </CustomForm.Group>
          </CustomForm>
        </CustomCard.Body>
      </CustomCard>
    </Container>
  );
};

export default HeaderForm;
