import { Container, Row, Col, Image } from 'react-bootstrap';
import facebookIcon from '../../img/facebook.svg';
import instagramIcon from '../../img/instagram.svg';
import youtubeIcon from '../../img/youtube.svg';

const Footer = () => {
  return (
    <footer className="">
        <Container fluid="md">
            <Row className="py-5">
                <Col md={8} sm={9} xs={12} className="d-flex align-items-center justify-content-center justify-content-sm-start">
                    <div>
                        <a href="#!" target="_blank" className="mr-5">
                            <i>
                                <Image src={facebookIcon} className="w-100" style ={{maxWidth: '25px', verticalAlign: 'midle'}}/>
                            </i>
                        </a>
                        <a href="#!" target="_blank" className="mr-5">
                            <i>
                                <Image src={instagramIcon} className="w-100" style ={{maxWidth: '25px', verticalAlign: 'midle'}}/>
                            </i>
                        </a>
                        <a href="#!" target="_blank" className="">
                            <i>
                                <Image src={youtubeIcon} className="w-100" style ={{maxWidth: '35px', verticalAlign: 'midle'}}/>
                            </i>
                        </a>
                    </div>
                </Col>
                <Col md={4} sm={3} xs={12} className="text-right d-flex align-items-center justify-content-center justify-content-sm-end mt-3 mt-sm-0">
                    <span className="logo">Martattoo</span>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;