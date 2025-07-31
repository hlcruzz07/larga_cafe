import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

type TeamCardProps = {
  name: string;
  position: string;
  imageUrl: string;
};

export default function TeamCard({ name, position, imageUrl }: TeamCardProps) {
  return (
    <div
      className="relative group overflow-hidden rounded-4xl"
      tabIndex={0}
      data-aos="flip-right"
    >
      <img
        src={imageUrl}
        className="w-full h-130 object-cover group-hover:scale-110 group-focus-within:scale-110 transition-all ease-in-out duration-300"
        alt=""
      />
      <div className="bg-black/20 absolute z-1 w-full h-full group-hover:top-0 group-focus-within:top-0 transition-all ease-in-out duration-300"></div>
      <div className="absolute bottom-0 text-center w-full z-2 transition-all ease-in-out duration-300">
        <h1 className="text-3xl font-extrabold mb-2">{name}</h1>
        <p className="font-medium mb-5">{position}</p>
        <div className="flex items-center justify-center gap-10 mt-2 mb-5 max-h-0 overflow-hidden group-hover:max-h-50 group-focus-within:max-h-50 transition-all ease-in-out duration-500">
          <a
            href="#"
            className="w-15 h-15 border rounded-full flex items-center justify-center bg-black/30 hover:border-amber-300 hover:text-amber-300 transition-all ease-in-out duration-300 text-xl"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="w-15 h-15 border rounded-full flex items-center justify-center bg-black/30 hover:border-amber-300 hover:text-amber-300 transition-all ease-in-out duration-300 text-xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            className="w-15 h-15 border rounded-full flex items-center justify-center bg-black/30 hover:border-amber-300 hover:text-amber-300 transition-all ease-in-out duration-300 text-xl"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}
