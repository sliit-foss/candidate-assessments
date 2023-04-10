import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Hero = ({ btnLink, btnText, desc, imgAlt, imgSrc, title }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(btnLink);
  };
  return (
    <Container className="mt-5 p-3" fluid>
      <Row>
        <Col md={6}>
          <h3 className="L-heroTitle">{title}</h3>
          <p className="L-heroDesc">{desc}</p>
          <button className="L-heroBtn" onClick={handleClick}>
            {btnText}
          </button>
        </Col>
        <Col md={6}>
          <img className="L-heroImg" src={imgSrc} alt={imgAlt} />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
