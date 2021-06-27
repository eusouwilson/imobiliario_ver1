import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { COLORS } from "constants/index";

export const ModalTitle = styled(Modal.Title)`
  display: flex;
  flex-direction: row;
  font-size: 24;
  font-weight: bolder;
  color: ${COLORS.blackLight};
  align-items: center;
`;
