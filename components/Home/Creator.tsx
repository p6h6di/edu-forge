"use client";

import React from "react";
import AnimatedTooltip from "./AnimatedTooltip";

const people = [
  {
    id: 1,
    name: "Aman Jaiman",
    designation: "Software Engineer",
    image: "/creator-1.jpg",
  },
  {
    id: 2,
    name: "Arnav Sharma",
    designation: "Frontend Developer",
    image: "/creator-2.jpg",
  },
  {
    id: 3,
    name: "Kiran Kumari",
    designation: "Backend Developer",
    image: "/creator-3.jpg",
  },
  {
    id: 4,
    name: "Muskan Chauhan",
    designation: "Backend Developer",
    image: "/creator-4.jpeg",
  },
  {
    id: 5,
    name: "Tushar",
    designation: "API Integration",
    image: "/creator-5.jpeg",
  },
];

const Creator = () => {
  return (
    <div className="z-40 mb-10 flex w-full flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
};

export default Creator;
