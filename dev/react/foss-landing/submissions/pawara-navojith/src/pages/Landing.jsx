import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Hero from '../components/Landing/Hero';
import { HeroSec } from '../assets/Landing/data/Landing/hero';
import WhatWeDo from '../components/Landing/WhatWeDo';
import ImgAndDesc from '../components/About/ImgAndDesc';
import {
  mascotAlt,
  mascotDesc,
  mascotImg,
  mascotTitle,
} from '../assets/Landing/data/Landing/mascot';
import ClubInfo from '../components/Landing/ClubInfo/ClubInfo';

const Landing = () => {
  return (
    <Container fluid>
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
      <Row>
        <WhatWeDo />
      </Row>
      <Row>
        <ImgAndDesc
          desc={mascotDesc}
          imgAlt={mascotAlt}
          id={'mascot'}
          imgSrc={mascotImg}
          first={'image'}
          title={mascotTitle}
        />
      </Row>
      <Row>
        <ClubInfo />
      </Row>
    </Container>
  );
};

export default Landing;
