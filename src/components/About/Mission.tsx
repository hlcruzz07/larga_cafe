import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import about1 from "../../assets/img/about1.webp";
export default function Mission() {
  return (
    <div className="mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div data-aos="fade-right">
        <li className="list-disc text-stone-400 font-extrabold">OUR MISSION</li>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-2 text-white leading-tight">
          Brewing Community, One Cup at a Time
        </h1>
        <p className="mt-5 text-stone-300 text-base md:text-lg leading-relaxed">
          At Larga Café, our mission is to be more than just a coffee shop —
          we’re a space for stories, slow moments, and shared flavors. We take
          pride in crafting every dish and drink with care, using quality
          ingredients sourced locally whenever possible. We aim to foster a
          community where comfort, creativity, and culture blend seamlessly.
        </p>
        <ul className="mt-6 flex flex-col gap-3 text-stone-300">
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>
              Championing locally grown ingredients and Negrense culinary roots.
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>
              Creating an inviting, inclusive space for every guest to feel at
              home.
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>
              Serving coffee and meals that spark connection and comfort.
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>
              Supporting local farmers, artisans, and the Silay creative scene.
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>
              Delivering consistency, quality, and care in every sip and bite.
            </span>
          </li>
        </ul>
      </div>

      <div
        className="hidden xl:flex justify-center items-center"
        data-aos="fade-left"
      >
        <img
          src={about1}
          className="w-130 h-130 object-cover rounded-4xl"
          alt=""
        />
      </div>
    </div>
  );
}
