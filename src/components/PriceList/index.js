import { Container, Row, Col } from "react-bootstrap";
import PriceItem from "./PriceItem";

const PriceList = () => {
  const PriceListData = [
    { id: 1, title: "стандарт", price: "99" },
    { id: 2, title: "супер", price: "125" },
    { id: 3, title: "делюкс", price: "120" },
    { id: 4, title: "преміум", price: "150"},
  ];

  const PriceListItems = PriceListData.map((item) => (
    <Col sm={6} md={6} lg={3} xs={12} className="mb-4 mb-lg-0">
      <PriceItem item={item} price={item.price} title={item.title} key={item.id} />
    </Col>
  ));

  return (
    <section className="section_bg" id="price">
      <Container>
        <Row>
          <Col sm={12} md={12} xs={12} className="text-center section-heading">
            <div className="section-heading__subtitle">
              Ми любимо креативні тату
            </div>
            <h2 className="section-heading__title">Вартість послуг</h2>
          </Col>
          {PriceListItems}
        </Row>
      </Container>
    </section>
  );
};

export default PriceList;
