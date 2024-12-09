import { FaCheckCircle } from "react-icons/fa";

function ServicesFeatures({ title, features }) {
  return (
    <section className="py-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
      <ul className="space-y-4 p-8 pl-[4%] bg-[#C58E62]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle className="text-[#323232] mt-1 mr-3 flex-shrink-0 text-xl sm:text-2xl" />
            <p className="font-[500] text-white text-sm leading-relaxed 750:text-[20px] 1150:text-[22px] 1200:text-[25px]">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ServicesFeatures;
