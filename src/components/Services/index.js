import {
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import img1 from "../../img/tattoo-img-services-1.jpg";
import img2 from "../../img/tattoo-img-services-2.jpg";

const Services = () => {
  return (
    <section className="Services p-0">
      <Container fluid>
        <Row>
          <Col sm={3} lg={4} md={3} xs={12} className="p-0 d-none d-sm-block">
            <div className="h-100">
              <Image
                src={img1}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
          <Col
            sm={6}
            lg={4}
            md={6}
            xs={12}
            className=""
            style={{ background: "#000000", padding: "5%" }}
          >
            <div
              className="Services__title-wrap"
              style={{ border: "7px solid #6ad5a7", padding: "6%" }}
            >
              <span className="text-large alt-font text-white text-uppercase">
                Створена галерея
              </span>
              <span className="title-extra alt-font font-weight-700 text-white text-uppercase d-block mt-2">
                татуу арту
              </span>
            </div>
            <div
              className="Services__content-wrap d-flex flex-column mt-5"
              style={{ padding: "5%" }}
            >
              <span className="text-extra-large text-uppercase alt-font text-white d-block mb-5">
                У ЦЬОМУ РОЦІ МИ ЗАПРОШИЛИ ХУДОЖНИКІВ РОЗКРИТИ СВІЙ ТАЛАНТ ДЛЯ
                ПОКАЗУ ТВОРЧОСТІ.
              </span>

              <p className="text-large text-white mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
              <Button variant="outline-success" style={{ maxWidth: "200px" }}>
                ГАЛЕРЕЯ
              </Button>
            </div>
          </Col>
          <Col sm={3} lg={4} md={3} xs={12} className="p-0 d-none d-sm-block">
            <div className="h-100">
              <Image
                src={img2}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
