import styled from "styled-components";
import { Button, Form, InputGroup } from "react-bootstrap";

import { SIZES, COLORS } from "../../../constants";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Box = styled.div`
  width: 450px;
  height: 400px;
  border-radius: 10px;
  background-color: #e0e0e0;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CustomForm = styled(Form)`
  background-color: #e0e0e0;
`;

export const FeedBack = styled(Form.Control.Feedback)`
  background-color: #e0e0e0;
  font-size: ${SIZES.body3}px;
`;

export const CustomInputGroup = styled(InputGroup)`
  background-color: #e0e0e0;
`;

export const Input = styled(Form.Control)`
  width: 360px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px #bdbdbd;
  background-color: #f2f2f2;
  padding: 20px;
  font-size: ${SIZES.body3}px;
  margin-top: ${SIZES.padding * 2}px;
`;

export const CheckGroup = styled(Form.Group)`
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
`;

export const Check = styled(Form.Check)`
  background-color: #e0e0e0;
`;
export const LabelCheck = styled(Form.Label)`
  background-color: #e0e0e0;
  padding-top: 10px;
  color: ${COLORS.blue};
`;

export const CustomButton = styled(Button)`
  width: 410px;
  height: 55px;
  margin-top: 20px;
`;
