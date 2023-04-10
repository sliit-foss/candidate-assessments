import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {
  wwdDesc,
  wwdTitle,
} from '../../../assets/Landing/data/Landing/whatWeDo';
import './style.css';
const WhatWeDo = () => {
  return (
    <Container id="wwd">
      <Row className="mt-3">
        <Col md={8} className="mx-auto">
          <h2 id="wwdTitle">{wwdTitle}</h2>
          <p id="wwdDesc">{wwdDesc}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatWeDo;
