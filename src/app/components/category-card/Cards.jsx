import React from "react";
import CategoryCard from "./CategoryCard";

function CategoryCards() {
  const cardData = [
    {
      name: "Cleanroom",
      link: "/products/cleanroom",
      image: "/cleanroom-card.jpg", // Path relative to the public folder
      features: [
        "High-quality materials",
        "Easy installation",
        "Customizable sizes",
        "Complies with industry standards",
      ],
    },
    {
      name: "HVAC",
      link: "/products/hvac",
      image: "/hvac-card.jpg", // Path relative to the public folder
      features: [
        "Energy efficient",
        "Advanced temperature control",
        "Durable design",
        "Low maintenance",
      ],
    },
    {
      name: "Air-Filtration",
      link: "/products/air-filtering",
      image: "/air-card.jpg", // Path relative to the public folder
      features: [
        "Effective pollutant removal",
        "Compact and durable",
        "Quiet operation",
        "Affordable filters",
      ],
    },
  ];

  return (
    <div className="container flex justify-center mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-lg mx-auto">
        {cardData.map((item, index) => (
          <CategoryCard
            key={index}
            name={item.name}
            link={item.link}
            features={item.features}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryCards;
