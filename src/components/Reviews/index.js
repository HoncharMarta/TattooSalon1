import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import starIcon from "../../img/star.svg";
import img1 from "../../img/review-img-1.webp";
import img2 from "../../img/review-img-2.webp";
import img3 from "../../img/review-img-3.webp";

const Reviews = () => {
  return (
    <section>
      <Container fluid="md">
        <Row>
          <Col sm={12} md={12} xs={12} className="text-center px-lg-5">
            <Carousel>
              <Carousel.Item>
                <Row className="d-flex align-items-start justify-content-center ReviewItem">
                  <Col
                    className="d-flex align-items-center justify-content-center justify-content-md-end"
                    md={4}
                    sm={12}
                    xs={12}
                  >
                    <div style={{ width: "200px", height: "200px" }}>
                      <Image roundedCircle src={img1} className="w-100" />
                    </div>
                  </Col>
                  <Col md={5} sm={12} xs={12}>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                    </div>
                    <span className="ReviewItem__name d-flex align-items-center align-items-md-start justify-content-center justify-content-md-start">
                      Олена Яків
                    </span>
                    <p className="text-left ReviewItem__desc d-flex align-items-center align-items-md-start justify-content-sm-start  justify-content-lg-start justify-content-xl-start justify-content-center justify-content-md-start pl-5 pr-5 pl-md-0 pr-md-3 ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text. Lorem Ipsum is simply dummy text.
                    </p>
                    <div className="separator d-none d-md-block"></div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="d-flex align-items-start justify-content-center ReviewItem">
                  <Col
                    className="d-flex align-items-center justify-content-center justify-content-md-end"
                    md={4}
                    sm={12}
                    xs={12}
                  >
                    <div style={{ width: "200px", height: "200px" }}>
                      <Image roundedCircle src={img2} className="w-100" />
                    </div>
                  </Col>
                  <Col md={5} sm={12} xs={12}>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                    </div>
                    <span className="ReviewItem__name d-flex align-items-center align-items-md-start justify-content-center justify-content-md-start">
                        Людмила Орест
                    </span>
                    <p className=" text-left ReviewItem__desc d-flex align-items-center align-items-md-start justify-content-center justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-md-start pl-5 pr-5 pl-md-0 pr-md-3 ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text. Lorem Ipsum is simply dummy text.
                    </p>
                    <div className="separator d-none d-md-block"></div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="d-flex align-items-start justify-content-center ReviewItem">
                  <Col
                    className="d-flex align-items-center justify-content-center justify-content-md-end"
                    md={4}
                    sm={12}
                    xs={12}
                  >
                    <div style={{ width: "200px", height: "200px" }}>
                      <Image roundedCircle src={img3} className="w-100" />
                    </div>
                  </Col>
                  <Col md={5} sm={12} xs={12}>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                      <i>
                        <img
                          alt="star"
                          src={starIcon}
                          style={{ width: "19px" }}
                        />
                      </i>
                    </div>
                    <span className="ReviewItem__name d-flex align-items-center align-items-md-start justify-content-center justify-content-md-start">
                      Ігор Степанів
                    </span>
                    <p className="text-left ReviewItem__desc d-flex align-items-center align-items-md-start justify-content-center justify-content-sm-start  justify-content-md-start justify-content-lg-start justify-content-xl-start pl-5 pr-5 pl-md-0 pr-md-3 ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text. Lorem Ipsum is simply dummy text.
                    </p>
                    <div className="separator d-none d-md-block"></div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
