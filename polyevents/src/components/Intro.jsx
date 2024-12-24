import React from "react";

const Intro = () => {
  return (
    <div className="bg-white w-full h-auto flex">
      <div className="mt-40 ml-10 w-1/2">
        <div className="text-blue-500 text-7xl font-sans font-bold drop-shadow-2xl">
          Bienvenue sur Polyevents L'expérience ultime des événements
        </div>
        <div className="mt-4 text-2xl leading-10 text-gray-500 ">
          Notre plateforme vous propose une solution complète pour découvrir et
          gérer une large gamme d'événements : conférences, concerts, salons,
          festivals, et bien plus. Que vous soyez participant, organisateur ou
          partenaire, profitez de nos outils performants pour trouver, réserver
          et suivre les événements qui vous intéressent. Bénéficiez d’une
          expérience fluide et personnalisée grâce à notre interface intuitive,
          tout en restant informé des dernières tendances du secteur.
        </div>
      </div>
      <div className="bg-white w-1/2 ">
        <img
          src="/calendrier.png"
          alt="PicIntro"
          className="w-full h-full object-cover drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Intro;
