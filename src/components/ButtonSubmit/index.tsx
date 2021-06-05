import React from "react";

import { CustomButton } from "./styles";
import { Spinner } from "react-bootstrap";
interface Ibuttom {
  loading: boolean;
  title: string;
}

const ButtonSubmit: React.FC<Ibuttom> = (props) => {
  return (
    <div>
      <CustomButton
        variant="primary"
        size="lg"
        type="submit"
        disabled={props.loading}
      >
        {props.loading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="sr-only">Carregando...</span>
          </>
        ) : (
          <>{props.title}</>
        )}
      </CustomButton>
    </div>
  );
};

export default ButtonSubmit;
