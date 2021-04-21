import { Container, Row, } from "react-bootstrap";
import MainSection from "../MainSection";
import AboutUs from "../AboutUs";
import Services from "../Services";
import Galery from "../Galery";
import PriceList from "../PriceList";
import Reviews from "../Reviews";
import Blogs from "../Blogs";
import Contacts from "../Contacts";

const SectionContainer = () => {
  return (
    <div className="section-container">
      <Container fluid>
        <Row>
          <MainSection />
        </Row>
        <Row>
          <AboutUs />
        </Row>
        <Row>
          <Services />
        </Row>
        <Row>
          <Galery />
        </Row>
        <Row>
          <PriceList />
        </Row>
        <Row>
          <Reviews />
        </Row>
        <Row>
          <Blogs />
        </Row>
        <Row>
          <Contacts />
        </Row>
      </Container>
    </div>
  );
};

export default SectionContainer;
