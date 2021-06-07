import React, { useState, useEffect } from "react";
import { Button, Table, Image } from "react-bootstrap";
import { images, COLORS } from "constants/index";
import { ListBuilding, CreatePerson } from "../../index";
import { HeaderForm, Pagination } from "components/";

import { Container } from "./styles";
import { GetPersons, SearchPersonByName } from "services/person";
import { IPersons, IPerson } from "interfaces/person";

const ListPerson: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showBuilding, setShowBuilding] = useState(false);
  const [person, setPerson] = useState<IPersons>();
  const [name, setName] = useState<string>();
  const [idPerson, setIdPerson] = useState<number>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  async function fetchPerson() {
    const data = await GetPersons();
    setPerson(data);
  }

  async function searchByName() {
    if (!name) return;
    const data = await SearchPersonByName(name);
    setPerson(data);
  }

  function ClearSearch() {
    fetchPerson();
    setName("");
  }

  useEffect(() => {
    fetchPerson();
  }, []);

  function editPerson(id: number) {
    setIdPerson(id);
    setShow(true);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = person?.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems: any = person?.length;
  return (
    <Container>
      <HeaderForm
        handleShowModal={() => setShow(true)}
        handleSearch={searchByName}
        setValue={setName}
        title="Lista de Pessoas"
        handleCleaner={ClearSearch}
        value={name}
      />
      <CreatePerson
        setShow={() => setShow(!show)}
        show={show}
        handlerUpdateList={fetchPerson}
        idPerson={idPerson}
      />
      <ListBuilding
        setShow={() => setShowBuilding(!showBuilding)}
        show={showBuilding}
      />

      {/* fim do header de busca */}
      <div style={{ backgroundColor: COLORS.white, paddingBottom: 10 }}>
        <Table bordered hover>
          <thead style={{ backgroundColor: COLORS.black, color: COLORS.white }}>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          {person === [] ? (
            <tbody> não existe dados para exibir</tbody>
          ) : (
            <tbody style={{ padding: 5 }}>
              {currentItem?.map((person: IPerson) => {
                return (
                  <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.phone}</td>
                    <td>{person.email}</td>
                    <td width="200" align="center" style={{ padding: 5 }}>
                      <Button
                        style={{
                          marginRight: "8px",
                        }}
                        variant="secondary"
                        size="sm"
                        onClick={() => editPerson(person.id)}
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

                      <Button
                        variant="info"
                        size="sm"
                        style={{
                          marginRight: "8px",
                        }}
                        onClick={() => setShowBuilding(true)}
                      >
                        <Image
                          src={images.house}
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
          )}
        </Table>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            paginate={paginate}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListPerson;
