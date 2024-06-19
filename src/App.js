import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './components/Home';
import PetProfile from './components/PetProfile';
import PetList from './components/PetList';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import AnimalDetails from './components/AnimalDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/pets/:id' element={<PetProfile/>} />
            <Route path='/pets' element={<PetList/>} />
            <Route path='/' element={<Home />} exact />
            <Route path="/animal/:id" element={<AnimalDetails />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
