import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../../assets/Landing/FOSS-logo.webp';
import logo2 from '../../assets/Landing/logo-dark.webp';
import './styles.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [logo, setLogo] = useState(logo1);
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setLogo(logo1);
        console.log(window.location.pathname);
      } else {
        setLogo(logo2);
      }
    };
  });

  return (
    <Navbar
      className={
        logo === logo1 ? 'navbar-header p-4' : 'navbar-header navbar-shadow p-4'
      }
      collapseOnSelect
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="/">
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
              href="/"
              className={url === '/' ? 'underline active' : ''}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={url === '/about' ? 'underline active' : ''}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="/events"
              className={url === '/events' ? 'underline active' : ''}
            >
              EVENTS
            </Nav.Link>
            <Nav.Link
              href="board"
              className={url === '/board' ? 'underline active' : ''}
            >
              BOARD
            </Nav.Link>
            <Nav.Link
              href="blogs"
              className={url === '/blogs' ? 'underline active' : ''}
            >
              BLOGS
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={url === '/contact' ? 'underline active' : ''}
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
