import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type TestimonialCardProps = {
  icon: IconDefinition;
  text: string;
  image: string;
  name: string;
};
export default function TestimonialCard({
  icon,
  text,
  image,
  name,
}: TestimonialCardProps) {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-8 pb-25 px-4">
      <FontAwesomeIcon
        icon={icon}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-stone-400"
      />

      <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl text-stone-200 leading-relaxed max-w-4xl">
        {text}
      </h1>

      <div className="flex flex-col gap-2 justify-center items-center">
        <img
          src={image}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover"
          alt=""
        />
        <h1 className="text-base sm:text-sm md:text-lg lg:text-xl font-extrabold text-stone-300">
          {name}
        </h1>
      </div>
    </div>
  );
}
