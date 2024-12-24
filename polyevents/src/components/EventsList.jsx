import React from "react";
import EventCard from "./EventCard";

const events = [
    {
      "image": "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Sunset Landscape",
      "date": "2024-10-15",
      "description": "A breathtaking view of a sunset over a calm sea, painted with vibrant colors.",
      "createdBy": "Alice Johnson",
      "price": "500"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Urban Jungle",
      "date": "2023-08-22",
      "description": "A digital artwork depicting a vibrant cityscape intertwined with nature.",
      "createdBy": "Bob Smith",
      "price": "350"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Abstract Forms",
      "date": "2024-05-10",
      "description": "An abstract art piece with bold shapes and bright colors, creating a sense of motion.",
      "createdBy": "Carla Lee",
      "price": "420"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Starry Night Reimagined",
      "date": "2024-02-28",
      "description": "A modern twist on the classic 'Starry Night,' combining traditional and digital techniques.",
      "createdBy": "David Ray",
      "price": "800"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Ocean Breeze",
      "date": "2023-11-10",
      "description": "A serene ocean painting capturing the calming waves and a gentle breeze.",
      "createdBy": "Emily Adams",
      "price": "450"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Mountain Peaks",
      "date": "2024-03-30",
      "description": "A dramatic landscape of snow-capped mountains under a bright sky, evoking the majesty of nature.",
      "createdBy": "Franklin White",
      "price": "700"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Midnight Glow",
      "date": "2023-07-17",
      "description": "A mysterious, dark painting illuminated by glowing lights, creating an ethereal atmosphere.",
      "createdBy": "Grace Turner",
      "price": "550"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Echoes of the Past",
      "date": "2024-04-12",
      "description": "A hauntingly beautiful piece featuring ancient ruins with hints of gold and sunlight breaking through the clouds.",
      "createdBy": "Helen Clark",
      "price": "620"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Floral Symphony",
      "date": "2023-09-05",
      "description": "A vibrant painting showcasing a variety of flowers in full bloom, symbolizing life and growth.",
      "createdBy": "Isaac Morgan",
      "price": "380"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Modern Serenity",
      "date": "2024-01-19",
      "description": "A minimalist piece with soft pastel colors, designed to evoke peace and tranquility.",
      "createdBy": "Jasmine Cole",
      "price": "500"
    }
  ]

  
const EventsList = () => {
    return(
        <div>
            <p className="text-center text-2xl text-blue-700 font-bold font-mono mb-7 tracking-wide mt-20">______________________________________    Découvrez nos évènements    ______________________________________</p>
            <div className="w-full grid grid-cols-5 gap-y-2 p-4 bg-blue-700">
            {events.map((event) => <EventCard {...event} />)}
            </div>
        </div>
    )
}

export default EventsList