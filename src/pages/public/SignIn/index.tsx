import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { AlertMessage, ButtonSubmit } from "../../../components/";
import { useAuth } from "../../../hooks/Auth";
import {
  Container,
  Box,
  CustomForm,
  CustomInputGroup,
  Input,
  CheckGroup,
  Check,
  LabelCheck,
  FeedBack,
} from "./styles";

const SignIn: React.FC = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const { singIn, loading, error, setError, signed } = useAuth();

  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [show, setShow] = useState(false);

  const [remember, setRemember] = useState<boolean>(false);

  useEffect(() => {
    if (signed) {
      history.replace(from);
    }
  }, [signed, from, history]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      return;
    }

    setValidated(true);
    await singIn(email, senha, remember);

    if (!signed) {
      setShow(true);
    } else {
      history.replace(from);
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    setError(null);
    setShow(false);
  };

  return (
    <Container>
      {show ? (
        <AlertMessage show={show} setShow={handleClose} error={error} />
      ) : (
        <Box>
          <CustomForm noValidate validated={validated} onSubmit={handleSubmit}>
            <CustomInputGroup hasValidation>
              <Input
                placeholder="Email"
                required
                type="email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <FeedBack type="invalid">Digite seu Email</FeedBack>
            </CustomInputGroup>
            <CustomInputGroup hasValidation>
              <Input
                placeholder="Senha"
                required
                type="password"
                onChange={(e: any) => setSenha(e.target.value)}
              />
              <FeedBack type="invalid">Digite sua Senha</FeedBack>
            </CustomInputGroup>
            <CheckGroup controlId="Checkbox">
              <Check
                type="checkbox"
                onChange={(e: any) => setRemember(e.target.checked)}
              />
              <LabelCheck>Ficar Conectador</LabelCheck>
            </CheckGroup>
            <ButtonSubmit title="Entrar" loading={loading} />
          </CustomForm>
        </Box>
      )}
    </Container>
  );
};

export default SignIn;
