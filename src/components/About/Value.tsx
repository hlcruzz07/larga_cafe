import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import about3 from "../../assets/img/about3.webp";
export default function Value() {
  return (
    <div className="mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div data-aos="fade-right">
        <li className="list-disc text-stone-400 font-extrabold">OUR VALUE</li>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-2 text-white leading-tight">
          Rooted in Heart, Served with Purpose
        </h1>
        <p className="mt-5 text-stone-300 text-base md:text-lg leading-relaxed">
          At the heart of Larga Café are values that guide every detail — from
          how we greet guests to how we prepare our food. We believe in
          kindness, creativity, and consistency. Every action we take reflects
          our desire to make people feel seen, nourished, and valued.
        </p>
        <ul className="mt-6 flex flex-col gap-3 text-stone-300">
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>
              Warm hospitality that makes every guest feel like family.
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>Creativity in every flavor, design, and experience.</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>Commitment to quality and consistency.</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>Respect for local culture, people, and ingredients.</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>Genuine care in every sip, plate, and conversation.</span>
          </li>
        </ul>
      </div>

      <div
        className="hidden xl:flex justify-center items-center"
        data-aos="fade-left"
      >
        <img
          src={about3}
          className="w-130 h-130 object-cover rounded-4xl"
          alt=""
        />
      </div>
    </div>
  );
}
