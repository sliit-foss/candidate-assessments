import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../../../assets/Landing/FOSS-logo.webp';
import logo2 from '../../../assets/Landing/logo-dark.webp';
import './styles.css';
import { useState, useEffect } from 'react';

const Header = () => {
  const [selected, setSelected] = useState(['underline']);
  const [logo, setLogo] = useState(logo1);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setLogo(logo1);
      } else {
        setLogo(logo2);
      }
    };
  });
  const handleClick = (index) => {
    const s = [];
    for (let i = 0; i < 7; i++) {
      if (i === index) {
        s[index] = 'underline';
      } else {
        s[i] = '';
      }
    }
    setSelected(s);
  };

  return (
    <Navbar
      className={
        logo === logo1 ? 'navbar-header p-4' : 'navbar-header navbar-shadow p-4'
      }
      collapseOnSelect
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className={
              logo === logo1
                ? 'd-inline-block foss-logo1 align-top m-0'
                : 'd-inline-block foss-logo2 align-top '
            }
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#"
              className={selected[0]}
              onClick={() => handleClick(0)}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#"
              className={selected[1]}
              onClick={() => handleClick(1)}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#"
              className={selected[2]}
              onClick={() => handleClick(2)}
            >
              EVENTS
            </Nav.Link>
            <Nav.Link
              href="#"
              className={selected[3]}
              onClick={() => handleClick(3)}
            >
              BOARD
            </Nav.Link>
            <Nav.Link
              href="#"
              className={selected[4]}
              onClick={() => handleClick(4)}
            >
              BLOGS
            </Nav.Link>
            <Nav.Link
              href="#"
              className={selected[5]}
              onClick={() => handleClick(5)}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
