import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit: ", User);
    axios.post("http://127.0.0.1:3000/auth/register", User).then((response) => {
      console.log(response);
      const { success, message } = response.data;
      if (success) {
        navigate("/");
      } else {
        setErrorMessage(message);
      }
    });
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex">
      <div className="flex-1 flex justify-center items-center bg-white p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded shadow-lg"
        >
          <h2 className="text-2xl mb-6 font-bold text-center">S'inscrire</h2>

          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 border border-gray-300 rounded"
              required
              onChange={(e) => setUser({ ...User, firstName: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2 border border-gray-300 rounded"
              required
              onChange={(e) => setUser({ ...User, lastName: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
              onChange={(e) => setUser({ ...User, email: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              required
              onChange={(e) => setUser({ ...User, password: e.target.value })}
            />
          </div>
          {errorMessage && (
            <div className="mb-6 bg-red-500 text-white p-2 rounded">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            S'inscrire
          </button>
        </form>
      </div>

      <div className="flex-1 bg-blue-700 flex flex-col justify-center items-center text-white py-6">
        <a
          href="https://www.polytecsousse.tn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/PolyLogoV2.png"
            alt="Ecole Polytechnique Sousse"
            className="max-w-xs mb-4"
          />
        </a>

        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-3xl hover:text-blue-500"></i>
          </a>
          <a
            href="https://www.facebook.com/ayhem.marzougui.10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook text-3xl hover:text-blue-600"></i>
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-3xl hover:text-black"></i>
          </a>
        </div>

        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Ayham Marzougui. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
