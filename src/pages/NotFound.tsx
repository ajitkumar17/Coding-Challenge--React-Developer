import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Card style={{ width: "28rem", margin: "2rem", marginLeft: "0rem" }}>
        <Card.Body>
          <Card.Title>404 - Page Not Found</Card.Title>
          <Card.Title>The page you are looking for does not exist.</Card.Title>
          <Button variant="primary" onClick={() => navigate("/profile-form")}>
            Create Profile
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotFound;
