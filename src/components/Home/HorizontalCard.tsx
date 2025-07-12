import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type HorizontalCardProp = {
  icon: IconDefinition;
  title: string;
  desc: string;
};

export default function HorizontalCard({
  icon,
  title,
  desc,
}: HorizontalCardProp) {
  return (
    <div className="flex items-center gap-5 text-white group">
      <div className="text-5xl border-4 border-stone-300 group-hover:border-amber-800 w-40 h-20 flex items-center justify-center rounded-2xl relative">
        <FontAwesomeIcon
          icon={icon}
          className="group-hover:transform-[rotateY(180deg)] transition-all duration-300"
        />
      </div>
      <div>
        <h1 className="font-extrabold">{title}</h1>
        <p className="text-stone-400">{desc}</p>
      </div>
    </div>
  );
}
