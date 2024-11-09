import { useState, useContext, useEffect } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

const ProfileForm: React.FC = () => {
  const { saveProfile, editProfile } = useContext(ProfileContext);
  const navigate = useNavigate();
  const location = useLocation();
  const editingProfile = location.state?.profile;

  const [formData, setFormData] = useState({
    userId: editingProfile?.name || "",
    name: editingProfile?.name || "",
    email: editingProfile?.email || "",
    age: editingProfile?.age || "",
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (editingProfile) {
      setFormData(editingProfile);
    }
  }, [editingProfile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || formData.name.length < 3) {
      setError("Name is required and must be at least 3 characters");
      return;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("A valid email is required");
      return;
    }

    if (editingProfile) {
      editProfile(editingProfile.userId, formData);
    } else {
      saveProfile(formData);
    }

    setError(null);
    setFormData({ userId: "", name: "", email: "", age: 0 });
    navigate("/profile");
  };

  return (
    <Container>
      <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="w-25"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            className="w-25"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            className="w-25"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {error && <Form.Text className="text-danger">{error}</Form.Text>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ProfileForm;
