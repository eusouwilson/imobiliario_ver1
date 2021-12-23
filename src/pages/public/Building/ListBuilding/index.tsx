import React, { useEffect, useState } from "react";
import { Button, Table, Image, Modal, Col, Row } from "react-bootstrap";
import { images, COLORS } from "constants/index";
import { IBuildings, IPerson, IBuilding } from "interfaces/index";
import { searchBuildingByProprietary } from "services/building";
import CreateBuilding from "../CreateBuilding/index";

interface Iprops {
  show: boolean;
  setShow(): void;
  proprietary: IPerson;
}

const ListBuilding: React.FC<Iprops> = (props) => {
  const { proprietary, setShow, show } = props;

  const [buildings, setBuildings] = useState<IBuildings>();
  const [showBuilding, setShowBuilding] = useState(false);

  async function fetchBuilding(id: number) {
    const data = await searchBuildingByProprietary(id);
    setBuildings(data);
  }

  useEffect(() => {
    fetchBuilding(proprietary.id);
  }, [proprietary.id]);

  return (
    <>
      {buildings ? (
        <Modal show={show} onHide={setShow} centered size="lg">
          <CreateBuilding
            setShow={() => setShowBuilding(!showBuilding)}
            show={showBuilding}
            handlerUpdateList={() => fetchBuilding(proprietary.id)}
            proprietaryId={proprietary.id}
          />
          <div style={{ backgroundColor: COLORS.white, paddingBottom: 10 }}>
            <Modal.Header closeButton>
              <Modal.Title
                as={Row}
                style={{
                  fontSize: 24,
                  fontWeight: "bolder",
                  color: COLORS.blackLight,
                  width: "100%",
                }}
              >
                <Col sm="10">
                  <h3>{proprietary.name}</h3>
                </Col>
                <Col
                  sm="2"
                  style={{ display: "flex", justifyContent: "right" }}
                >
                  <Button
                    variant="success"
                    style={{
                      height: "40px",
                      width: "90%",
                    }}
                    onClick={() => setShowBuilding(true)}
                  >
                    <Image
                      src={images.add}
                      rounded
                      width="16"
                      height="16"
                      style={{ marginRight: 5 }}
                    />
                    Novo
                  </Button>
                </Col>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table bordered hover>
                <thead
                  style={{
                    backgroundColor: COLORS.black,
                    color: COLORS.white,
                  }}
                >
                  <tr>
                    <th>CEP</th>
                    <th>Endereço</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>UF</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody style={{ padding: 5 }}>
                  {buildings.map((building: IBuilding) => {
                    return (
                      <tr>
                        <td>{building.cep}</td>
                        <td>{building.address}</td>
                        <td>{building.district}</td>
                        <td>{building.city}</td>
                        <td>{building.uf}</td>
                        <td width="100" align="center" style={{ padding: 5 }}>
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
                    );
                  })}
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
