import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card';
import './style.css';
import Col from 'react-bootstrap/esm/Col';

const ClubInfo = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={6} lg={2}>
          <Card icon={'fa-calendar'} number={7} title={'Events'} />;
        </Col>
        <Col md={6} lg={2}>
          <Card icon={'fa-users'} number={119} title={'Members'} />;
        </Col>
        <Col md={6} lg={2}>
          <Card icon={'fa-github'} number={67} title={'Projects'} />;
        </Col>
        <Col md={6} lg={2}>
          <Card icon={'fa-video-camera'} number={12} title={'Webinars'} />;
        </Col>
      </Row>
    </Container>
  );
};

export default ClubInfo;
