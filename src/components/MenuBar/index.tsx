import React from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { images, COLORS } from "../../constants/";
import { ImgContainer, ItemMenu } from "./styles";
import { useAuth } from "hooks/Auth";
import { BtnContainer } from "./styles";
import { Link } from "react-router-dom";

const MenuBar: React.FC = () => {
  const { signed, singOut, user } = useAuth();

  return (
    <div>
      {signed ? (
        <>
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand>
                <Link
                  style={{ textDecoration: "none", color: COLORS.gray }}
                  to="/"
                >
                  <ItemMenu>
                    <ImgContainer>
                      <Image src={images.menu} rounded width="32" height="32" />
                    </ImgContainer>
                    MENU
                  </ItemMenu>
                </Link>
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: COLORS.gray }}
                    to="/person/list"
                  >
                    <ItemMenu>
                      <ImgContainer>
                        <Image
                          src={images.person}
                          rounded
                          width="32"
                          height="32"
                        />
                      </ImgContainer>
                      Pessoas
                    </ItemMenu>
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: COLORS.gray }}
                    to="/agreement/list"
                  >
                    <ItemMenu>
                      <ImgContainer>
                        <Image
                          src={images.agreement}
                          rounded
                          width="32"
                          height="32"
                        />
                      </ImgContainer>
                      Contratos
                    </ItemMenu>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: COLORS.gray }}
                    to="/admin"
                  >
                    <ItemMenu>
                      <ImgContainer>
                        <Image
                          src={images.admin}
                          rounded
                          width="32"
                          height="32"
                        />
                      </ImgContainer>
                      Preferências
                    </ItemMenu>
                  </Link>
                </Nav.Link>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>{user.email}</Navbar.Text>
              </Navbar.Collapse>
              <BtnContainer>
                <Button
                  variant="danger"
                  type="button"
                  onClick={() => singOut()}
                >
                  Sair
                </Button>
              </BtnContainer>
            </Container>
          </Navbar>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenuBar;
