import React from 'react';
import { Link } from 'react-router-dom'; // Utilisation de Link pour naviguer sans recharger la page

const Navbar = () => {
  return (
    <div className="w-full text-blue-700 flex justify-between px-20 bg-white h-20 border-b-2 shadow-sm fixed top-0 left-0 z-50">
      <h1 className="text-4xl mt-4 font-bold">PolyEvents</h1>
      <div className="mt-3 mb-3 space-x-4">
        {/* Le bouton qui redirige vers la page de connexion */}
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Se connecter
          </button>
        </Link>

        {/* Le bouton qui redirige vers la page d'inscription */}
        <Link to="/signup">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            S'inscrire
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
