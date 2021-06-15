import React, { useEffect, useState } from "react";
import { Button, Table, Image, Modal } from "react-bootstrap";
import { images, COLORS } from "constants/index";
import { IBuilding, IPerson } from "interfaces/index";
import { GetBuilding } from "services/building";
//import { HeaderForm } from "../../../../components";

//import { Container } from "./styles";
interface Iprops {
  show: boolean;
  setShow: any;
  proprietary: IPerson;
}

const ListBuilding: React.FC<Iprops> = (props) => {
  const [building, setBuilding] = useState<IBuilding>();
  //const [show, setShow] = useState(false);
  useEffect(() => {
    async function fetchBuilding(id: number) {
      const data = await GetBuilding(id);
      setBuilding(data);
    }

    fetchBuilding(props.proprietary.id);
  }, [props.proprietary.id]);

  return (
    <>
      {building ? (
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
                {props.proprietary.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table bordered hover>
                <thead
                  style={{ backgroundColor: COLORS.black, color: COLORS.white }}
                >
                  <tr>
                    <th>#</th>
                    <th>CEP</th>
                    <th>Endereço</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody style={{ padding: 5 }}>
                  <tr>
                    <td>{building.id}</td>
                    <td>{building.cep}</td>
                    <td>{building.address}</td>
                    <td>{building.district}</td>
                    <td>{building.city}</td>
                    <td width="160" align="center" style={{ padding: 5 }}>
                      <Button
                        style={{
                          marginRight: "8px",
                        }}
                        variant="secondary"
                        size="sm"
                      >
                        <Image
                          src={images.edit}
                          rounded
                          width="16"
                          height="16"
                        />
                      </Button>
                      <Button
                        variant="info"
                        size="sm"
                        style={{
                          marginRight: "8px",
                        }}
                      >
                        <Image
                          src={images.view}
                          rounded
                          width="16"
                          height="16"
                        />
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
      ) : (
        <></>
      )}
    </>
  );
};

export default ListBuilding;
