import styled from "styled-components";
import { Alert } from "react-bootstrap";
import { COLORS } from "constants/";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 450px;
  height: 400px;
`;

export const CustomAlert = styled(Alert)`
  background-color: ${COLORS.lightGray};
`;

export const Heading = styled(Alert.Heading)`
  background-color: ${COLORS.lightGray};
`;
