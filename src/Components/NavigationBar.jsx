import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar className='navigat'  expand="lg">
            <Container>
                <Link className=' navibar navbar-brand text-light logo-size' to="/">Shopping Hall</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link text-light' to="/">Home</Link>
                        <Link className='nav-link text-light' to="/products">Products</Link>
                        <Link className='nav-link text-light' to="/login">Login</Link>
                        <Link className='ms-4 btn btn-light' to="/signup">SignUp</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;