import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleCheck,
  faUtensils,
  faMugSaucer,
  faHouseChimney,
  faStar,
  faCircleQuestion,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import homeImg1 from "../assets/img/home-img1.webp";
import homeImg2 from "../assets/img/home-img-2.webp";
import homeImg3 from "../assets/img/home-img-3.webp";
import homeImg4 from "../assets/img/home-img4.webp";
import homeImg5 from "../assets/img/home-img5.webp";
import drinks1 from "../assets/img/drinks1.webp";
import drinks2 from "../assets/img/drinks2.webp";
import homeSection2_1 from "../assets/img/home-section2-1.webp";
import homeBg1 from "../assets/img/home-bg.webp";
import homeBg2 from "../assets/img/home-bg2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "swiper/effect-utils";
import HorizontalCard from "../components/Home/HorizontalCard";
import TestimonialCard from "../components/TestimonialCard";
import icedLatte from "../assets/img/iced-latte.webp";
import buffaloWings from "../assets/img/buffalo-wings.webp";
import glazedChicken from "../assets/img/glazed-chicken.webp";
import largaCrunch from "../assets/img/larga-crunch.webp";
import DishCard from "../components/Home/DishCard";
import FaqCont from "../components/FaqCont";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import PageSpinner from "../components/PageSpinner";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  if (loading) {
    return <PageSpinner />;
  }
  return (
    <>
      <Header />
      {/* {FIRST CONTENT} */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="w-full h-full absolute z-0 flex">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            allowTouchMove={false}
            simulateTouch={false}
            navigation={false}
            pagination={false}
            slideToClickedSlide={false}
            cssMode={false}
          >
            <SwiperSlide>
              <img
                src={homeBg1}
                className="w-full h-full object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={homeBg2}
                className="w-full h-full object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="w-full h-full absolute bg-black/70"></div>
        <div className="flex flex-col min-h-screen pt-20">
          <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45 h-full grow flex items-center justify-center relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full h-full mb-20 lg:mb-0 mt-10 lg:mt-0">
              <div className="flex items-center" data-aos="fade-right">
                <div className="font-bold text-white text-center lg:text-left">
                  <h1 className="text-stone-400 tracking-wide uppercase">
                    A Taste of Heritage
                  </h1>
                  <h1 className="text-6xl mt-5 lg:mt-1 font-extrabold leading-tight">
                    Experience Silay's Charm
                    <span className="text-stone-400"> in Every Bite</span>
                  </h1>
                  <p className="mt-3 font-normal max-w-2xl m-auto lg:m-0 lg:mt-3">
                    At Larga Café, we bring Silay City's timeless elegance to
                    your table — blending local flavors with modern artistry.
                    Indulge in soulful cuisine, brewed stories, and a heritage
                    worth savoring.
                  </p>
                  <button className="p-3 mt-5 hover:text-stone-300 hover:bg-stone-800 transition-colors duration-300 px-8 font-light rounded-full bg-stone-600">
                    <a href="#">
                      Explore Menu
                      <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="flex justify-center" data-aos="fade-left">
                <div className="relative w-max">
                  <img
                    src={homeImg1}
                    alt="Larga Café"
                    className="h-150 lg:h-180 w-full lg:w-120 rounded-full object-cover"
                  />
                  <img
                    src={homeImg2}
                    alt="Larga Café"
                    className="h-35 w-35 absolute top-0 lg:top-20 right-[-20px] lg:right-[-60px] rounded-full object-cover border-8 border-stone-300 bg-white"
                  />
                  <img
                    src={homeImg3}
                    alt="Larga Café"
                    className="h-35 w-35 absolute bottom-0 lg:bottom-20 left-[-20px] lg:left-[-60px] rounded-full object-cover border-8 border-stone-300 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {SECOND CONTENT} */}
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

      {/* {THIRD} */}
      <div className="bg-neutral-900 py-20 overflow-hidden">
        <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45">
          <div className="text-center text-white" data-aos="fade-down">
            <h1 className="text-xs md:text-base">OUR MAIN DISHES</h1>
            <h1 className="text-2xl md:text-4xl font-extrabold mt-3">
              Must-Try Favorites at Larga Café
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-10 gap-15">
            <DishCard
              data-aos="zoom-in-down"
              image={icedLatte}
              title="Iced Latte"
              text="Our signature iced coffee is brewed strong and served cold in a wide-mouthed glass. It’s smooth and refreshing—perfect for Silay’s tropical weather."
            />
            <DishCard
              data-aos="zoom-in-down"
              image={buffaloWings}
              title="Buffalo Wings"
              text="Crispy and juicy chicken wings coated in a spicy-sweet buffalo glaze. It’s packed with flavor and perfect for sharing with friends."
            />
            <DishCard
              data-aos="zoom-in-down"
              image={glazedChicken}
              title="Glazed Chicken"
              text="Tender chicken cooked to perfection and finished with a sticky honey garlic glaze. It’s sweet, savory, and always satisfying."
            />
            <DishCard
              data-aos="zoom-in-down"
              image={largaCrunch}
              title="Larga Crunch"
              text="Crispy chicken served with our signature dipping sauce. It’s crunchy, flavorful, and a must-try for first-time visitors."
            />
          </div>

          <hr className="text-white mt-10" />
          <div className="mt-15 text-center">
            <p className="text-stone-300 mb-4 text-lg">
              There’s more to explore on our menu from local favorites to
              signature drinks. Come take a look!
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 py-2 border border-white text-white hover:text-stone-300 hover:bg-stone-800 transition-colors duration-300 px-8 font-light rounded-full bg-stone-600"
            >
              Learn More
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
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
      <div className="relative bg-[url(./assets/img/home-bg5.webp)] bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden">
        <div className="w-full h-full absolute bg-black/70"></div>
        <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45 py-20 relative text-center">
          <div className="text-white">
            <div data-aos="zoom-in-down">
              <li className="list-disc text-xs md:text-base">
                OUR TESTIMONALS
              </li>
              <h1 className="text-xl md:text-5xl mt-3 font-extrabold">
                REAL STORIIES OF MEMORABLE <br />{" "}
                <span className="text-stone-400">MEALS AND EXPERIENCES</span>
              </h1>
            </div>

            <div
              className="flex justify-center mt-15 relative"
              data-aos="fade-in"
            >
              <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                allowTouchMove={true}
              >
                <SwiperSlide>
                  <TestimonialCard
                    icon={faQuoteLeft}
                    text="Larga Café feels like home. The iced latte is always spot
                      on, and the staff never fail to greet you with a smile.
                      It’s my go-to spot for catching up with friends or winding
                      down after work. "
                    image={homeBg1}
                    name="Danilo Burdagol, Developer"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    icon={faQuoteLeft}
                    text="I ordered the Fiesta Negrense combo and it was honestly
                      more than I expected. Everything was fresh, flavorful, and
                      served fast!"
                    image={homeBg2}
                    name="Angela S., Content Creator"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    icon={faQuoteLeft}
                    text="Whether I’m working remotely or just relaxing, Larga Café
                      has the perfect vibe. Great food, fast Wi-Fi, and even
                      better coffee."
                    image={homeBg1}
                    name="Mark J., Freelance Web Designer"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    icon={faQuoteLeft}
                    text="The Glazed Chicken is a must-try! Sweet, savory, and
                      perfectly cooked. Larga Café knows how to satisfy your
                      cravings."
                    image={homeBg2}
                    name="Rachel T., Food Blogger"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    icon={faQuoteLeft}
                    text="I love how the staff always make you feel welcome. And the
                      place looks great at night — super cozy and aesthetic!"
                    image={homeBg1}
                    name="Ella V., Architecture Student"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    icon={faQuoteLeft}
                    text="Their Larga Crunch is my ultimate guilty pleasure. Crispy,
                      savory, and goes perfectly with their lemonade."
                    image={homeBg2}
                    name="Jerome P., Marketing Officer"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard
                    icon={faQuoteLeft}
                    text="Larga Café is where I take all my out-of-town friends. It
                      captures the heart of Silay’s food scene perfectly."
                    image={homeBg1}
                    name="Carlo N., Local Guide"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

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

      <div className="bg-neutral-900 overflow-hidden">
        <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45 py-20">
          <div className="text-center" data-aos="zoom-out-up">
            <li className="list-disc text-stone-400 text-xs md:text-base">
              LATEST BLOG
            </li>
            <h1 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-5xl mt-3">
              EXPLORE OUR LATEST NEWS <br />{" "}
              <span className="text-stone-400">AND UPDATES</span>
            </h1>
          </div>

          <div className="mt-15 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
            <BlogCard
              data-aos="zoom-in-down"
              image={homeImg2}
              title="Behind the Brew: How We Source Silay’s Best Coffee Beans"
            />
            <BlogCard
              data-aos="zoom-in-down"
              image={homeImg1}
              title="Fiesta Negrense at Home: Recreating Our Signature Combo Meal"
            />
            <BlogCard
              data-aos="zoom-in-down"
              image={homeBg2}
              title="Savor the Season: Our Guide to Dining with Local, Fresh Ingredients"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
