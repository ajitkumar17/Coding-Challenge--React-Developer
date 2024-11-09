import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const { profiles, deleteProfile } = useContext(ProfileContext);
  const navigate = useNavigate();

  if (!profiles.length) {
    return (
      <Container>
        <Card style={{ width: "28rem", margin: "2rem", marginLeft: "0rem" }}>
          <Card.Body>
            <Card.Title>No profile found. Please create one.</Card.Title>
            <Button variant="primary" onClick={() => navigate("/profile-form")}>
              Create Profile
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
  return (
    <Container>
      <h1>Profile Details</h1>
      <div className="d-flex gap-4">
        {profiles.map((profile) => (
          <Card style={{ width: "18rem" }} key={profile.userId}>
            <Card.Body>
              <Card.Title>Name: {profile.name}</Card.Title>
              <Card.Title>Email: {profile.email}</Card.Title>
              <Card.Title>Age: {profile.age || "Not provided"}</Card.Title>
              <div className="d-flex gap-4">
                <Button
                  variant="warning"
                  onClick={() =>
                    navigate("/profile-form", { state: { profile } })
                  }
                >
                  Edit Profile
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteProfile(profile.userId)}
                >
                  Delete Profile
                </Button>
              </div>
            </Card.Body>
            <Button onClick={() => navigate("/profile-form")}>
              Add Another Profile
            </Button>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Profile;
