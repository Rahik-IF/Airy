import React from "react";
import CategoryCard from "./CategoryCard";

function ServiceCategoryCards() {
  const cardData = [
    {
      name: "Cleanroom",
      link: "/services/cleanroom",
      image: "/cleanroom-services.jpeg", // Path relative to the public folder
      features: [
        "Enhanced air filtration systems",
        "Quick modular assembly",
        "Antimicrobial surface options",
        "Supports ISO class certifications",
      ],
    },
    {
      name: "HVAC",
      link: "/services/hvac",
      image: "/hvac-services.jpeg", // Path relative to the public folder
      features: [
        "Smart thermostat integration",
        "Noise-reduction technology",
        "Environmentally friendly refrigerants",
        "Remote monitoring and diagnostics",
      ],
    },    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
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

export default ServiceCategoryCards;
