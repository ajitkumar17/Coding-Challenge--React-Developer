import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProfileProvider } from "./context/ProfileContext.tsx";
import AppRouter from "./routes/AppRouter.tsx";
import NavBar from "./components/NavBar.tsx";

const App: React.FC = () => {
  return (
    <ProfileProvider>
      <NavBar />
      <AppRouter />
    </ProfileProvider>
  );
};

export default App;
