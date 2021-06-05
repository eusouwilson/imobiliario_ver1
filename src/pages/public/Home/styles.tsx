import styled from "styled-components";
import { Button } from "react-bootstrap";

import { COLORS } from "../../../constants";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 80px;
`;

export const MenuContainer = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 120px;
  background-color: ${COLORS.lightGray};
  margin-left: 30px;
`;

export const TitleMenu = styled.h2`
  font-weight: lighter;
  color: ${COLORS.black};
`;
export const ImgContainer = styled.div`
  margin-right: 10px;
`;
