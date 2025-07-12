import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWaze,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="border bg-[url(./assets/img/footer-bg.jpg)] bg-cover bg-center bg-no-repeat bg-fixed relative">
      <div className="w-full h-full absolute bg-black/70"></div>
      <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45 my-20 relative z-10">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20">
          <div className="text-stone-300 flex flex-col gap-5">
            <li className="list-disc text-3xl text-amber-400">
              <span className="text-white font-serif">Our Address</span>
            </li>
            <p>
              J. Pitong Ledesma Street, Silay City, Negros Occidental, Western
              Visayas, Philippines. <br /> <br /> We’re located near the heart
              of Silay, just a few minutes from the city plaza and walking
              distance from El Ideal Bakery.
            </p>
            <hr className="border-t-1 border-stone-300" />
            <div className="flex flex-wrap gap-5">
              <a
                href="https://www.facebook.com/LARGACAFEbyPOKRITAS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300">
                  <FontAwesomeIcon icon={faFacebook} />
                  <span>Facebook</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/larga_cafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300">
                  <FontAwesomeIcon icon={faInstagram} />
                  <span>Instagram</span>
                </div>
              </a>
            </div>
          </div>
          <div className="text-white flex flex-col gap-5">
            <li className="list-disc text-3xl text-amber-400">
              <span className="text-white font-serif">Connect With Us</span>
            </li>
            <div className="flex flex-col gap-5 text-stone-300">
              <a
                href="mailto:largacafesilay@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                  <span>largacafesilay@gmail.com</span>
                </div>
              </a>
              <a
                href="tel:09542884720"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300">
                  <FontAwesomeIcon icon={faPhone} className="text-xl" />
                  <span>09542884720</span>
                </div>
              </a>
              <a
                href="https://www.waze.com/live-map/directions/ph/western-visayas/silay/larga-cafe?to=place.ChIJ7Vo5KN4przMRCq4zkG3XQrE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300">
                  <FontAwesomeIcon icon={faWaze} className="text-xl" />
                  <span>Waze Location</span>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/place/LARGA+Caf%C3%A9/@10.7984448,122.9716914,17z/data=!3m1!4b1!4m6!3m5!1s0x33af29de28395aed:0xb142d76d9033ae0a!8m2!3d10.7984448!4d122.9742663!16s%2Fg%2F11ffmypz2l?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300">
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className="text-xl"
                  />
                  <span>Google Maps Location</span>
                </div>
              </a>
            </div>
            <div>
              <p className="text-white text-xl font-extrabold">
                10 : 00 AM - 9 : 00 PM
              </p>
              <p className="text-stone-400">Monday to Sunday</p>
            </div>
          </div>
          <div className="text-white flex flex-col gap-5">
            <li className="list-disc text-3xl text-amber-400">
              <span className="text-white font-serif">Quick Links</span>
            </li>
            <div className="flex flex-col gap-5 text-stone-300">
              <Link to="/">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300 hover:translate-x-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ms-2">Home</span>
                </div>
              </Link>
              <Link to="/about">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300 hover:translate-x-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ms-2">About</span>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300 hover:translate-x-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ms-2">Services</span>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300 hover:translate-x-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ms-2">Menu</span>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300 hover:translate-x-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ms-2">Contact Us</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-white flex flex-col gap-5">
            <li className="list-disc text-3xl text-amber-400">
              <span className="text-white font-serif">Additional Pages</span>
            </li>
            <div className="flex flex-col gap-5 text-stone-300">
              <Link to="">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300 hover:translate-x-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ms-2">Blog</span>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300 hover:translate-x-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ms-2">Testimonials</span>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300 hover:translate-x-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ms-2">Gallery</span>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300 hover:translate-x-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ms-2">Our Team</span>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-amber-400 transition-all ease-in-out duration-300 hover:translate-x-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ms-2">FAQ's</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white my-5" />
      <p className="text-center text-white relative z-10 mb-5">
        &copy; Copyright {new Date().getFullYear()}. All rights reserved{" "}
        <span className="text-amber-400">Larga Café</span>. Design by{" "}
        <span className="text-amber-400">Harold Cruz</span>.
      </p>
    </footer>
  );
}
