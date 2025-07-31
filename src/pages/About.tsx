import { Link } from "react-router-dom";
import Header from "../components/Header";
import AboutCont from "../components/AboutCont";
import {
  faArrowRight,
  faCircle,
  faCircleCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homeImg4 from "../assets/img/home-img4.webp";
import Mission from "../components/About/Mission";
import Vision from "../components/About/Vision";
import Value from "../components/About/Value";

import { useState } from "react";
import OurTeam from "../components/OurTeam/OurTeam";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
export default function About() {
  const [section, setSection] = useState("mission");
  const handleSectionChange = (value: string) => {
    setSection(() => {
      switch (value) {
        case "mission":
          return "mission";
        case "vision":
          return "vision";
        case "value":
          return "value";
        default:
          return "mission";
      }
    });
  };

  return (
    <>
      <Header />
      <div className="border-2 h-180 bg-[url(./assets/img/home-bg5.webp)] bg-cover bg-center bg-fixed relative">
        <div className="bg-black/60 absolute w-full h-full"></div>
        <div
          className="flex flex-col items-center justify-center h-full"
          data-aos="fade-up"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white z-10">
            About Us
          </h1>
          <div className="mt-5 text-white z-10">
            <Link to="/">
              <span>Home</span>
            </Link>
            <span className="text-white mx-2">/</span>
            <Link to="/about">
              <span>About Us</span>
            </Link>
          </div>
        </div>
      </div>

      <AboutCont />

      <div className="bg-stone-900 py-20 overflow-hidden">
        <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45 text-white">
          <div className="text-center" data-aos="fade-down">
            <li className="list-disc">OUR APPROACH</li>
            <h1 className="text-2xl lg:text-4xl mt-5 font-extrabold uppercase">
              DELIVERING MEMORABLE DINING <br />
              <span className="text-stone-400">EXPERIENCES</span>
            </h1>
          </div>

          <div
            className="flex items-center justify-center mt-20"
            data-aos="flip-left"
          >
            <div className="flex items-center gap-10 p-5 px-10 rounded-full bg-stone-800">
              <button
                onClick={() => handleSectionChange("mission")}
                type="button"
                className={`text-xs lg:text-sm font-bold cursor-pointer transition-all ease-in-out duration-300 ${
                  section === "mission" ? "text-amber-500" : "text-white"
                }`}
              >
                Our Mission
              </button>
              <FontAwesomeIcon className="text-xs" icon={faCircle} />
              <button
                onClick={() => handleSectionChange("vision")}
                type="button"
                className={`text-xs lg:text-sm font-bold cursor-pointer transition-all ease-in-out duration-300 ${
                  section === "vision" ? "text-amber-500" : "text-white"
                }`}
              >
                Our Vision
              </button>
              <FontAwesomeIcon className="text-xs" icon={faCircle} />
              <button
                onClick={() => handleSectionChange("value")}
                type="button"
                className={`text-xs lg:text-sm font-bold cursor-pointer transition-all ease-in-out duration-300 ${
                  section === "value" ? "text-amber-500" : "text-white"
                }`}
              >
                Our Value
              </button>
            </div>
          </div>
          {section === "mission" && <Mission />}
          {section === "vision" && <Vision />}
          {section === "value" && <Value />}
        </div>
      </div>

      <div className="bg-stone-950 py-20 overflow-hidden">
        <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
            <div
              className="flex items-center justify-center relative"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <img
                src={homeImg4}
                className="w-full h-full lg:w-160 lg:h-160 object-cover"
                alt=""
              />
              <div className="absolute text-xs sm:text-base bottom-[-60px] sm:bottom-[-10px] right-[-10px] text-white rounded-2xl bg-stone-700 group">
                <div className="flex flex-col gap-3 relative p-5 sm:p-7 sm:px-8 px-6 z-20 group-hover:text-gray-900">
                  <h1 className="font-extrabold sm:text-xl">Fiesta Negrense</h1>
                  <div className="flex items-center gap-2 text-amber-300 group-hover:text-orange-500">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <ul className="flex flex-col gap-1">
                    <li className="flex items-center">
                      <FontAwesomeIcon icon={faCircleCheck} className="me-3 " />
                      <p>9 Inches Pizza</p>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon icon={faCircleCheck} className="me-3 " />
                      <p>6 pcs. Fried Chicken</p>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon icon={faCircleCheck} className="me-3 " />
                      <p>Fries</p>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon icon={faCircleCheck} className="me-3 " />
                      <p>Pitcher Lemonade</p>
                    </li>
                  </ul>
                </div>
                <div className="absolute z-1 bottom-0 right-0 rounded-2xl bg-amber-300 w-full h-0 group-hover:h-full transition-all duration-300 ease-in-out"></div>
              </div>
            </div>
            <div
              className="flex items-center justify-center"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="text-white flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <li className="list-disc text-xs md:text-base">
                    FEATURED COMBO
                  </li>
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase"
                    data-aos="fade-left"
                  >
                    Gather & celebrate with our{" "}
                    <span className="text-stone-400">Fiesta Negrense set</span>
                  </h1>
                  <p data-aos="fade-left">
                    A celebration of Negrense flavors in a single feast. Enjoy
                    flavorful pizza, crispy chicken, golden fries, and
                    refreshing lemonade—perfect for sharing.
                  </p>
                </div>
                <ul className="flex flex-col gap-1" data-aos="fade-left">
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>Authentic Negrense-style pizza experience</p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>Juicy fried chicken with crispy skin</p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>Perfectly seasoned, shareable fries</p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-3 text-stone-500"
                    />
                    <p>Time-honored homemade lemonade</p>
                  </li>
                </ul>
                <button
                  data-aos="fade-left"
                  className="w-max p-2 px-8 rounded-full bg-white text-gray-950 font-extrabold cursor-pointer before:content-[''] relative before:absolute z before:left-0 before:top-0 before:w-[0] before:h-full overflow-hidden before:bg-stone-600 before:z-1 hover:before:w-full before:transition-all before:duration-300 hover:text-white"
                >
                  <span className="z-5 relative">
                    Explore Combo{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurTeam />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
