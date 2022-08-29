import Container from "@mui/material/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./components/tabs/Tabs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":id" element={<Tabs />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
