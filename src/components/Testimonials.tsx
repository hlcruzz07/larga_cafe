import TestimonialCard from "./TestimonialCard";
import { Autoplay, Navigation } from "swiper/modules";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import homeBg1 from "../assets/img/home-bg.webp";
import homeBg2 from "../assets/img/home-bg2.webp";
export default function Testimonials() {
  return (
    <div className="relative bg-[url(./assets/img/home-bg5.webp)] bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden">
      <div className="w-full h-full absolute bg-black/70"></div>
      <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45 py-20 relative text-center">
        <div className="text-white">
          <div data-aos="zoom-in-down">
            <li className="list-disc text-xs md:text-base">OUR TESTIMONALS</li>
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
  );
}
