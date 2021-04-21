import { Container, Row, Col, Image, Button, } from "react-bootstrap";
import img1 from "../../img/tattoo-img-blog-1.jpg";
import img2 from "../../img/tattoo-img-blog-2.jpg";
import img3 from "../../img/tattoo-img-blog-3.jpg";

const Blogs = () => {
  return (
    <section className="section_bg" id="blog">
      <Container>
        <Row>
          <Col sm={12} md={12} xs={12} className="text-center section-heading">
            <h2 className="section-heading__title">Недавні події</h2>
          </Col>
          <Col sm={4} md={4} xs={12}>
            <div className="mb-5 mb-md-0">
              <div>
                <div>
                  <Image src={img1} className="w-100" />
                </div>
                <div className="BlogItem__details mt-4 d-flex flex-column">
                  <span>
                    <Button variant="dark" size="sm">
                      TATOO
                    </Button>
                  </span>
                  <span className="BlogItem__title my-3">
                    <a href="#!">Ваш розум відповість на більшість питань, якщо ви навчитеся розслаблятись.</a>
                  </span>
                  <p className="BlogItem__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem...
                  </p>
                  <div className="separator-line-full"></div>
                  <span className="BlogItem__datepost">May 2, 2016 / Posted by Haresh</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4} md={4} xs={12}>
            <div className="mb-5 mb-md-0">
              <div>
                <div>
                  <Image src={img2} className="w-100" />
                </div>
                <div className="BlogItem__details mt-4 d-flex flex-column">
                  <span>
                    <Button variant="dark" size="sm">
                      TATOO
                    </Button>
                  </span>
                  <span className="BlogItem__title my-3">
                    <a href="#!">Як вибрати собі класне тату?</a>
                  </span>
                  <p className="BlogItem__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem...
                  </p>
                  <div className="separator-line-full"></div>
                  <span className="BlogItem__datepost">July 22, 2018 / Posted by Robert</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4} md={4} xs={12}>
            <div className="mb-5 mb-md-0">
              <div>
                <div>
                  <Image src={img3} className="w-100" />
                </div>
                <div className="BlogItem__details mt-4 d-flex flex-column">
                  <span>
                    <Button variant="dark" size="sm">
                      TATOO
                    </Button>
                  </span>
                  <span className="BlogItem__title my-3">
                    <a href="#!">Догляд за шкірою після татуювання</a>
                  </span>
                  <p className="BlogItem__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem...
                  </p>
                  <div className="separator-line-full"></div>
                  <span className="BlogItem__datepost">March 15, 2019 / Posted by Mia</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
