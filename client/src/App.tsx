import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
