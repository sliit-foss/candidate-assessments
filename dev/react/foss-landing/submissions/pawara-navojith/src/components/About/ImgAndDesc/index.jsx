import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

const ImgAndDesc = ({ desc, first, imgAlt, imgSrc, title }) => {
  return (
    <Container className="mt-5 p-5" fluid>
      <Row>
        {first === 'image' ? (
          <>
            <Col md={5}>
              <img className="heroImg" src={imgSrc} alt={imgAlt} />
            </Col>
            <Col md={7}>
              <h3 className="heroTitle">{title}</h3>
              <p className="heroDesc">{desc}</p>
            </Col>
          </>
        ) : (
          <>
            <Col md={{ span: 8, order: 'first' }} xs={{ order: 'last' }}>
              <h3 className="heroTitle">{title}</h3>
              <p className="heroDesc">{desc}</p>
            </Col>
            <Col md={{ span: 4, order: 'last' }} xs={{ order: 'first' }}>
              <img className="heroImg" src={imgSrc} alt={imgAlt} />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default ImgAndDesc;
