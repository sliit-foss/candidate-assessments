import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

const ImgAndDesc = ({ desc, first, imgAlt, imgSrc, title }) => {
  return (
    <Container className="mt-5">
      <Row>
        {first === 'image' ? (
          <>
            <Col md={4}>
              <img className="heroImg" src={imgSrc} alt={imgAlt} />
            </Col>
            <Col md={8}>
              <h3 className="heroTitle">{title}</h3>
              <p className="heroDesc">{desc}</p>
            </Col>
          </>
        ) : (
          <>
            <Col md={8}>
              <h3 className="heroTitle">{title}</h3>
              <p className="heroDesc">{desc}</p>
            </Col>
            <Col md={4}>
              <img className="heroImg" src={imgSrc} alt={imgAlt} />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default ImgAndDesc;
