import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CreatePetitionPage } from './pages/CreatePetitionPage';
import { PetitionPage } from './pages/PetitionPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/create" element={<Layout><CreatePetitionPage /></Layout>} />
        <Route path="/petition/:id" element={<Layout><PetitionPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;