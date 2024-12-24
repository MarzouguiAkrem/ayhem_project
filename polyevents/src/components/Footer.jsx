import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 text-blue-700">
      {/* Make the logo clickable */}
      <a
        href="https://www.polytecsousse.tn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/PolyLogo.png"
          alt="Ecole Polytechnique Sousse"
          className="max-w-xs mb-4"
        />
      </a>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mb-4">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin text-3xl hover:text-blue-500"></i>
        </a>

        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/ayhem.marzougui.10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook text-3xl hover:text-blue-600"></i>
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github text-3xl hover:text-black"></i>
        </a>
      </div>

      {/* Copyright Text */}
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} Ayham Marzougui. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
