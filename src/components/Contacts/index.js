import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import emailIcon from "../../img/email.svg";
import noteIcon from "../../img/note.svg";
import smartphoneIcon from "../../img/smartphone.svg";
import placeholderIcon from "../../img/placeholder.svg";

const Contacts = () => {
  return (
    <section className="section_bg" id="contacts">
      <Container>
        <Row>
          <Col sm={12} md={12} xs={12} className="text-center section-heading">
            <h2 className="section-heading__title">Як нас знайти</h2>
          </Col>
          <Col sm={12} lg={6} xs={12} className="mb-4">
            <div>
              <span className="text-extra-large d-inline-block alt-font text-dark">
                Є проект, в якому ви зацікавлені обговорити з нами? Напишіть нам
                на рядок нижче, ми б із задоволенням поговорили.
              </span>
            </div>
          </Col>
          <Col sm={12} lg={6} xs={12}>
            <div>
              <span className="title-small text-dark alt-font d-block xs-text-center call-us">
                <i>
                  <Image
                    src={smartphoneIcon}
                    className="w-100"
                    style={{ maxWidth: "20px", verticalAlign: "midle" }}
                  />
                </i>
                <a href="tel:+380688295334" className="text-dark">
                  +380 688 295 334
                </a>
                <span className="mx-3">|</span>
                <a href="mailto:123454321vfhnf@gmail.com" className="text-dark">
                  <i>
                    <Image
                      src={emailIcon}
                      className="w-100 mr-1"
                      style={{ maxWidth: "20px", verticalAlign: "midle" }}
                    />
                  </i>
                  123454321vfhnf@gmail.com
                </a>
              </span>
            </div>
          </Col>
          <Col sm={12} lg={5} xs={12} className="mt-5">
            <div>
              <Col sm={12} md={12} xs={12} className="mb-4">
                <Row>
                  <Col
                    sm={12}
                    md={12}
                    lg={2}
                    className="pl-lg-0 d-flex align-items-center justify-content-center align-items-lg-start justify-content-lg-start"
                  >
                    <i>
                      <Image
                        src={placeholderIcon}
                        className="w-100"
                        style={{ maxWidth: "50px", verticalAlign: "top" }}
                      />
                    </i>
                  </Col>
                  <Col
                    sm={12}
                    md={12}
                    lg={10}
                    className="d-flex align-items-center justify-content-center align-items-lg-start justify-content-lg-start flex-column"
                  >
                    <span
                      className="text-uppercase alt-font text-dark text-large"
                      style={{ fontWeight: "bold" }}
                    >
                      Наша студія
                    </span>
                    <p className="text-medium">
                      вулиця Січових Стрільців 301а, <br />
                      м. Чернівці
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={12} xs={12} className="mb-4">
                <Row>
                  <Col
                    sm={12}
                    md={12}
                    lg={2}
                    className="pl-lg-0 d-flex align-items-center justify-content-center align-items-lg-start justify-content-lg-start"
                  >
                    <i>
                      <Image
                        src={noteIcon}
                        className="w-100"
                        style={{ maxWidth: "50px", verticalAlign: "top" }}
                      />
                    </i>
                  </Col>
                  <Col
                    sm={12}
                    md={12}
                    lg={10}
                    className="d-flex align-items-center justify-content-center align-items-lg-start justify-content-lg-start flex-column"
                  >
                    <span
                      className="text-uppercase alt-font text-dark text-large"
                      style={{ fontWeight: "bold" }}
                    >
                      Співпраця
                    </span>
                    <p>
                      <a
                        href="mailto:123454321vfhnf@gmail.com"
                        className="text-dark text-medium"
                      >
                        123454321vfhnf@gmail.com
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={12} xs={12}>
                <Row>
                  <Col
                    sm={12}
                    md={12}
                    lg={2}
                    className="pl-lg-0 d-flex align-items-center justify-content-center align-items-lg-start justify-content-lg-start"
                  >
                    <i>
                      <Image
                        src={smartphoneIcon}
                        className="w-100"
                        style={{ maxWidth: "50px", verticalAlign: "top" }}
                      />
                    </i>
                  </Col>
                  <Col
                    sm={12}
                    md={12}
                    lg={10}
                    className="d-flex align-items-center justify-content-center align-items-lg-start justify-content-lg-start flex-column"
                  >
                    <span
                      className="text-uppercase alt-font text-dark text-large"
                      style={{ fontWeight: "bold" }}
                    >
                      Зателефонуйте нам
                    </span>
                    <p>
                      <a
                        href="tel:+380688295334"
                        className="text-dark text-medium"
                      >
                        +380 688 295 334
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
          <Col sm={12} md={12} xs={12} lg={7} className="mt-5">
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="*YOUR NAME" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="*YOUR EMAIL" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  placeholder="*YOUR MESSAGE"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button variant="dark" type="SUBMIT">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacts;
