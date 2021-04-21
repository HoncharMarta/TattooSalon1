import { Container, Row, Col, Image } from "react-bootstrap";
import img1 from "../../img/tattoo-img-galery-1.jpg";
import img2 from "../../img/tattoo-img-galery-2.jpg";
import img3 from "../../img/tattoo-img-galery-3.jpg";
import img4 from "../../img/tattoo-img-galery-4.jpg";
import img5 from "../../img/tattoo-img-galery-5.jpg";
import img6 from "../../img/tattoo-img-galery-6.jpg";
import img7 from "../../img/tattoo-img-galery-7.jpg";
import img8 from "../../img/tattoo-img-galery-8.jpg";

const Galery = () => {
  return (
    <section className="section_bg pb-0" id="galery">
      <Container>
        <Row>
          <Col sm={12} md={12} xs={12} className="text-center section-heading">
            <div className="section-heading__subtitle">
              Ми любимо креативні тату
            </div>
            <h2 className="section-heading__title">Галерея робіт</h2>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={3} md={3} xs={12} className="p-0">
            <div>
              <Image src={img1} className="w-100" />
            </div>
          </Col>
          <Col sm={3} md={3} xs={12} className="p-0">
            <div>
              <Image src={img2} className="w-100" />
            </div>
          </Col>
          <Col sm={3} md={3} xs={12} className="p-0">
            <div>
              <Image src={img3} className="w-100" />
            </div>
          </Col>
          <Col sm={3} md={3} xs={12} className="p-0">
            <div>
              <Image src={img4} className="w-100" />
            </div>
          </Col>
          <Col sm={3} md={3} xs={12} className="p-0">
            <div>
              <Image src={img5} className="w-100" />
            </div>
          </Col>
          <Col sm={3} md={3} xs={12} className="p-0">
            <div>
              <Image src={img6} className="w-100" />
            </div>
          </Col>
          <Col sm={3} md={3} xs={12} className="p-0">
            <div>
              <Image src={img7} className="w-100" />
            </div>
          </Col>
          <Col sm={3} md={3} xs={12} className="p-0">
            <div>
              <Image src={img8} className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Galery;
