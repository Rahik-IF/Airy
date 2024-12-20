import Link from "next/link";
import Image from "next/image";
export default function ServiceCategoryCard({ link = "", name, features, image }) {
  return (
    <Link href={link}>
      <div className="group relative w-80 h-96 overflow-hidden rounded-sm shadow-lg">
        {/* Image */}
        <Image
          src={`${image}`}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />

        {/* Bottom Section with Header and Features */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-secondary bg-opacity-70 text-white flex flex-col items-center justify-center font-semibold transition-all duration-500 group-hover:h-full group-hover:bottom-0">
          <h2 className="text-lg mt-28 group-hover:mt-0 duration-500">{name}</h2>
          <ul className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 mt-4 text-sm space-y-2">
            {features?.map((feature, index) => (
              <li key={index}>- {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
