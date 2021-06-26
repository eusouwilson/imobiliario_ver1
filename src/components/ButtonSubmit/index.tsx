import React from "react";
import { CustomButton } from "./styles";
import { Spinner } from "react-bootstrap";
interface Ibuttom {
  loading: boolean;
  title: string;
}

const ButtonSubmit: React.FC<Ibuttom> = (props) => {
  const { loading, title } = props;
  return (
    <div>
      <CustomButton
        variant="primary"
        size="lg"
        type="submit"
        disabled={loading}
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
          <>{title}</>
        )}
      </CustomButton>
    </div>
  );
};

export default ButtonSubmit;
