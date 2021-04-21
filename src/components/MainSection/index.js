import { Col, Image } from "react-bootstrap";
import masterImg from "../../img/tattoo-img-main.jpg";
import sloganImg from "../../img/tattoo-img-slogan.png";
import yakorImg from "../../img/tattoo-img-yakor.png";

const MainSection = () => {
  return (
    <section className="main-section w-100 text-center position-relative p-0">
      <div className="main-section__img-wrap position-absolute w-100">
        <Image src={masterImg} fluid className="main-section__img w-100" />
      </div>

      <Col className="d-flex align-items-center justify-content-center h-100 w-100">
        <div className="main-section__content">
          <img alt="slogan" src={sloganImg} className="mb-5 slogan" />
          <p className="main-section__text text-white text-uppercase ">
            <span>Найталановитіші майстри створюють для вас</span>
            <br />
            <span>мистецтво вищого сорту</span>
          </p>
          <img alt="yakor" src={yakorImg} className="mt-3" />
        </div>
      </Col>
    </section>
  );
};

export default MainSection;
