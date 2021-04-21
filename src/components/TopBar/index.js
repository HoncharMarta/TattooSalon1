import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
const TopBar = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <div className="header">
            <Navbar expand="lg">
              <Navbar.Brand href="#home" className="logo">
                Martattoo
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Nav>
                  <Nav.Link className="m-nav__link" href="#about-us">
                    Про нас
                  </Nav.Link>
                  <Nav.Link className="m-nav__link" href="#price">
                    Послуги
                  </Nav.Link>
                  <Nav.Link className="m-nav__link" href="#galery">
                    Портфоліо
                  </Nav.Link>
                  <Nav.Link className="m-nav__link" href="#blog">
                    Блог
                  </Nav.Link>
                  <Nav.Link className="m-nav__link" href="#contacts">
                    Контакти
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
