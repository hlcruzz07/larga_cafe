import FaqCont from "./FaqDropdown";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import drinks1 from "../assets/img/drinks1.webp";
import drinks2 from "../assets/img/drinks2.webp";
import homeImg5 from "../assets/img/home-img5.webp";

export default function FAQ() {
  return (
    <div className="bg-stone-950 overflow-hidden">
      <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45 py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-15">
          <div className=" border-white text-white">
            <h1
              className="text-2xl text-center md:text-4xl md:text-left font-extrabold"
              data-aos="zoom-out-down"
            >
              Frequently Ask Questions{" "}
              <FontAwesomeIcon icon={faCircleQuestion} className="ms-1" />
            </h1>
            <div className="flex flex-col gap-5 mt-10">
              <FaqCont
                data-aos="flip-right"
                question="What are your restaurant's hours of operation?"
                answer="We are open daily from 10:00 AM to 9:00 PM. Join us for lunch, dinner, or anything in between!"
              />
              <FaqCont
                data-aos="flip-right"
                question="Do you accept reservations?"
                answer="We currently accept walk-ins only, but feel free to message our Facebook page for large group inquiries."
              />
              <FaqCont
                data-aos="flip-right"
                question="Where are you located?"
                answer="Larga Café is located in Silay City, just a few minutes from the city plaza. Look for us along Rizal Street near El Ideal."
              />
              <FaqCont
                data-aos="flip-right"
                question="Do you offer vegetarian or dietary-friendly options?"
                answer="Yes! We have a selection of vegetarian meals and can adjust dishes based on certain dietary preferences."
              />
              <FaqCont
                data-aos="flip-right"
                question="Do you offer delivery or takeout?"
                answer="Yes, we offer both! You can place your orders via GrabFood or message us directly for takeout arrangements."
              />
              <FaqCont
                data-aos="flip-right"
                question="Is Larga Café available for private events?"
                answer="Yes, our space can be reserved for small private events. Reach out to us in advance so we can help you plan!"
              />
            </div>
            <div
              className="flex items-center mt-10 gap-5"
              data-aos="zoom-in-up"
            >
              <hr className="text-stone-300 grow" />

              <button className="w-max p-2 px-8 rounded-full bg-white text-gray-950 font-extrabold cursor-pointer before:content-[''] relative before:absolute z before:left-0 before:top-0 before:w-[0] before:h-full overflow-hidden before:bg-stone-600 before:z-1 hover:before:w-full before:transition-all before:duration-300 hover:text-white">
                <Link to="/" className="z-5 relative">
                  More Questions{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-1 " />
                </Link>
              </button>
              <hr className="text-stone-300 grow" />
            </div>
          </div>
          <div
            className="items-center justify-center hidden xl:flex"
            data-aos="fade-left"
          >
            <div className="relative">
              <img
                src={drinks1}
                className="absolute bottom-0 right-0 w-auto h-20 sm:h-40 object-cover animate-[shake_5s_ease-in-out_infinite]"
                alt=""
              />
              <img
                src={homeImg5}
                className="w-full sm:w-160 h-full sm:h-160 object-cover rounded-full"
                alt=""
              />
              <img
                src={drinks2}
                className="absolute top-0 left-0 w-auto h-25 sm:h-45 object-cover animate-[shake_5s_ease-in-out_infinite]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
