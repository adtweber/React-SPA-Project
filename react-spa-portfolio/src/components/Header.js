import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>Andi Weber</Navbar.Brand>
                <Nav className="home">
                    <Nav.Link href="about">About Me</Nav.Link>
                    <Nav.Link href="projects">Projects</Nav.Link>
                    <Nav.Link href="skills">Skills</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header