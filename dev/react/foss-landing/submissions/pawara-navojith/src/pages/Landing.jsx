import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Hero from '../components/Landing/Hero';
import { HeroSec } from '../assets/Landing/data/Landing/hero';

const Landing = () => {
  return (
    <Container>
      <Row>
        <Hero
          btnLink={HeroSec.btnLink}
          btnText={HeroSec.btnText}
          desc={HeroSec.desc}
          imgAlt={HeroSec.imgAlt}
          imgSrc={HeroSec.imgSrc}
          title={HeroSec.title}
        />
      </Row>
    </Container>
  );
};

export default Landing;
