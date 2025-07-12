import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type BlogCardProp = {
  image: string;
  title: string;
  [key: string]: string;
};
export default function BlogCard({ image, title, ...rest }: BlogCardProp) {
  return (
    <div className="group" {...rest} tabIndex={0}>
      <div className="overflow-hidden rounded-4xl">
        <img
          src={image}
          className="w-full h-[400px] object-cover group-hover:scale-110 group-focus-within:scale-110 transition-all duration-300"
          alt=""
        />
      </div>
      <div className="mt-3">
        <h1 className="text-white text-lg md:text-2xl font-bold mb-3">
          {title}
        </h1>
        <Link
          to="/"
          className="text-stone-500 text-base md:text-lg hover:text-stone-300 group-hover:translate-x-2 transition-all duration-300"
        >
          Read More <FontAwesomeIcon icon={faArrowRight} className="" />
        </Link>
      </div>
    </div>
  );
}
