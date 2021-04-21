import { Container, Row, Col, Image } from "react-bootstrap";
import tatooImg1 from "../../img/tattoo-img-about-1.jpg";
import tatooImg2 from "../../img/tattoo-img-about-2.jpg";
import AboutUsItem from "./AboutUsItem";

const AboutUs = () => {
  const AboutUsData = [
    {
      id: 1,
      title: "DESIGNING SINCE 99",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "AWARD WINNING TATTOO ARTISTS",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "SPECIALIZED IN TRIBAL",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const AboutUsItems = AboutUsData.map((item) => (
    <AboutUsItem desc={item.desc} title={item.title} key={item.id} />
  ));

  return (
    <section className="AboutUs section_bg" id="about-us">
      <Container>
        <Row>
          <Col sm={12} md={12} xs={12} className="text-center section-heading">
            <div className="section-heading__subtitle">Ми любимо татуювати</div>
            <h2 className="section-heading__title">Ми звемось Martattoo</h2>
          </Col>
          <Col sm={4} md={4} xs={12}>
            {AboutUsItems}
          </Col>

          <Col sm={4} md={4} xs={12} className="mt-4 mt-sm-0">
            <div>
              <Image src={tatooImg1} className="w-100" />
            </div>
          </Col>

          <Col sm={4} md={4} xs={12} className="mt-4 mt-sm-0">
            <div>
              <Image src={tatooImg2} className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
