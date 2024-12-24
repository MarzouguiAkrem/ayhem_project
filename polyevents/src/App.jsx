import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importation des composants nécessaires de React Router
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import EventsList from "./components/EventsList";
import Footer from "./components/Footer";
import Login from "./components/Login"; // Composant de connexion
import SignUp from "./components/SignUp"; // Composant d'inscription
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router> 
      <div className="flex h-screen flex-col">
        <Navbar />
        
        {/* Définition des routes avec React Router v6 */}
        <Routes>
          <Route path="/" element={<><Intro /><EventsList /></>} /> {/* Page d'accueil */}
          <Route path="/login" element={<Login />} /> {/* Page de connexion */}
          <Route path="/signup" element={<SignUp />} /> {/* Page d'inscription */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
