import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import about2 from "../../assets/img/about2.webp";
export default function Vision() {
  return (
    <div className="mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div data-aos="fade-right">
        <li className="list-disc text-stone-400 font-extrabold">OUR VISION</li>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-2 text-white leading-tight">
          Inspiring Silay, One Flavorful Story at a Time
        </h1>
        <p className="mt-5 text-stone-300 text-base md:text-lg leading-relaxed">
          Larga Café envisions becoming a local icon — a place where tradition
          meets innovation, and where every guest feels inspired to pause,
          connect, and enjoy the richness of Silay’s food culture. Our vision is
          to elevate everyday dining into something deeply meaningful, rooted in
          heritage and flavored with modern creativity.
        </p>
        <ul className="mt-6 flex flex-col gap-3 text-stone-300">
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>Becoming Silay’s most beloved café experience.</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>
              Blending heritage and creativity through food and ambiance.
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>Inspiring everyday joy through intentional dining.</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>
              Fostering deeper community bonds over meals and moments.
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              className="me-3 text-amber-300 mt-1"
              icon={faCircleCheck}
            />
            <span>Continuously growing while staying true to our roots.</span>
          </li>
        </ul>
      </div>

      <div
        className="hidden xl:flex justify-center items-center"
        data-aos="fade-left"
      >
        <img
          src={about2}
          className="w-130 h-130 object-cover rounded-4xl"
          alt=""
        />
      </div>
    </div>
  );
}
