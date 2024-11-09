import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const NavBar: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand>
              <Link
                className="text-decoration-none text-white"
                to="/profile-form"
              >
                Profile Form
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link className="text-decoration-none text-white" to="/profile">
                Profile
              </Link>
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
