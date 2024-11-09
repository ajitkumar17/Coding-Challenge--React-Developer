
import React from "react";
import ProfileForm from "../components/ProfileForm";
import { Container } from "react-bootstrap";

const ProfileFormPage: React.FC = () => {
  return (
    <Container>
      <h1>Create/Update Profile</h1>
      <ProfileForm />
    </Container>
  );
};

export default ProfileFormPage;
