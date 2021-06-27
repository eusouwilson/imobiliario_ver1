import React from "react";
import { Button, Table, Image, Modal } from "react-bootstrap";
import { images, COLORS } from "constants/";
interface Iprops {
  show: boolean;
  setShow: any;
}

const ListBuilding: React.FC<Iprops> = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.setShow} centered size="lg">
        <div style={{ backgroundColor: COLORS.white, paddingBottom: 10 }}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                fontSize: 24,
                fontWeight: "bolder",
                color: COLORS.blackLight,
              }}
            >
              Lista de Imoveis
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table bordered hover>
              <thead
                style={{ backgroundColor: COLORS.black, color: COLORS.white }}
              >
                <tr>
                  <th>#</th>
                  <th>Proprietário</th>
                  <th>Cidade</th>
                  <th>Bairro</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody style={{ padding: 5 }}>
                <tr>
                  <td>1</td>
                  <td>Jose Wilson Alves da Silva</td>
                  <td>Cidade alguma coisa</td>
                  <td>bairro algum coisa</td>
                  <td width="160" align="center" style={{ padding: 5 }}>
                    <Button
                      style={{
                        marginRight: "8px",
                      }}
                      variant="secondary"
                      size="sm"
                    >
                      <Image src={images.edit} rounded width="16" height="16" />
                    </Button>
                    <Button
                      variant="info"
                      size="sm"
                      style={{
                        marginRight: "8px",
                      }}
                    >
                      <Image src={images.view} rounded width="16" height="16" />
                    </Button>

                    <Button variant="info" size="sm">
                      <Image
                        src={images.contract}
                        rounded
                        width="16"
                        height="16"
                      />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ListBuilding;
