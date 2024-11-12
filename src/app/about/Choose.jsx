import { FaCheckCircle } from "react-icons/fa";

function ChooseText() {
  const features = [
    { title: "Expensive", description: "Lorem ipsum dolor sit amet consectetur. Eu adipiscing" },
    { title: "Expensive", description: "Lorem ipsum dolor sit amet consectetur. Eu adipiscing" },
    { title: "Expensive", description: "Lorem ipsum dolor sit amet consectetur. Eu adipiscing" },
  ];

  return (
    <section className="py-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">WHY CHOOSE US</h2>
      <ul className="space-y-4 pl-[4%] pt-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3 text-xl sm:text-2xl" />
            <div>
              <p className="font-semibold text-lg 750:text-[20px] 1150:text-[22px] 1200:text-[25px]">
                {feature.title}: <span className="font-normal text-base 750:text-[20px] 1150:text-[22px] 1200:text-[25px]">{feature.description}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ChooseText;
