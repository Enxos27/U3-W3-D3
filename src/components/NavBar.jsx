import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



function NavBar() {
    const navigate = useNavigate()
     const location = useLocation()
  return ( 
   <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" onClick={() => navigate('/')}>
            JobSearcher</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link  to="/"
             className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }>Home</Link>
              <Link  to="/favorites"
             className={
                location.pathname === '/favorites' ? 'nav-link active' : 'nav-link'
              }>Favorites</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;