import HorizontalCard from "../components/Home/HorizontalCard";
import homeSection2_1 from "../assets/img/home-section2-1.webp";

import {
  faCircleCheck,
  faUtensils,
  faMugSaucer,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutCont() {
  return (
    <>
      <div className="bg-stone-950 py-20 overflow-hidden">
        <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-white">
            <div
              className="hidden lg:flex items-center justify-center lg:justify-start"
              data-aos="zoom-in"
            >
              <img
                src={homeSection2_1}
                className="w-160 h-160 object-cover rounded-4xl"
                alt=""
              />
            </div>
            <div className="" data-aos="fade-left">
              <h1 className="text-stone-300 text-xs md:text-base font-extrabold uppercase">
                ☕ About Us
              </h1>
              <h1 className="text-white text-4xl md:text-5xl font-extrabold mt-1">
                Savor the slow rhythms of life,
                <span className="text-stone-400">
                  {" "}
                  one thoughtfully brewed cup at a time.
                </span>
              </h1>
              <p className="mt-4">
                At Larga Café, we believe in the beauty of taking your time —
                embracing the “larga lang” lifestyle that invites you to pause,
                connect, and savor. <br /> <br />
                Each cup we brew and every dish we serve is a tribute to Silay’s
                rich heritage and vibrant community. Whether you’re here for a
                morning boost, an afternoon catch-up, or a quiet evening alone,
                we welcome you with warmth, comfort, and flavor.
              </p>
              <div className="mt-5">
                <h1
                  className="text-xl"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  🌿 What We’re About
                </h1>
                <ul className="ps-1 mt-3 flex flex-col gap-3">
                  <li
                    className="flex items-center"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>
                      Locally Inspired – Rooted in Silay’s culture and charm.
                    </p>
                  </li>
                  <li
                    className="flex items-center"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>
                      Freshly Brewed – Handcrafted coffee made from locally
                      sourced beans.
                    </p>
                  </li>
                  <li
                    className="flex items-center"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>
                      Comfort & Creativity – A space that feels like home,
                      whether you're working, relaxing, or meeting with friends.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-5">
                <h1
                  className="text-xl"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  🍽️ What We Offer
                </h1>
                <ul className="ps-1 mt-3 flex flex-col gap-3">
                  <li
                    className="flex items-center"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>Espresso-based drinks (latte, cappuccino, americano)</p>
                  </li>
                  <li
                    className="flex items-center"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>Signature house blends</p>
                  </li>
                  <li
                    className="flex items-center"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>Cold brews & refreshers</p>
                  </li>
                  <li
                    className="flex items-center"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>Pasta, sandwiches, and pastries</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mt-15 border-t-stone-600" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-15"
            data-aos="fade-right"
          >
            <HorizontalCard
              icon={faUtensils}
              title="Comfort Food"
              desc="Satisfying, flavorful dishes made for silaynon tastes and shared moments."
            />
            <HorizontalCard
              icon={faMugSaucer}
              title="Specialty Coffee"
              desc="Thoughtfully brewed drinks to warm the soul and spark connection."
            />
            <HorizontalCard
              icon={faHouseChimney}
              title="Heritage Ambiance"
              desc="Dine inside a restored ancestral home, where every detail tells a story."
            />
          </div>
        </div>
      </div>
    </>
  );
}
