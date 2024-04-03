import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
function App() {
  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Container>
  );
}

export default App;
