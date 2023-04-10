import Container from 'react-bootstrap/esm/Container';

const Card = ({ icon, number, title }) => {
  return (
    <Container fluid className="p-0">
      <div className="card-box">
        <div>
          <i className={'card-icon fa ' + icon}></i>
        </div>
        <div className="card-num">{number}</div>
        <div className="card-title"> {title}</div>
      </div>
    </Container>
  );
};

export default Card;
