import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function FaqCont({
  question,
  answer,
  ...rest
}: {
  question: string;
  answer: string;
  [key: string]: string;
}) {
  return (
    <div
      {...rest}
      className="p-5 px-6 rounded-2xl bg-stone-900 cursor-pointer group"
      tabIndex={0}
    >
      <div className="flex justify-between gap-5 items-center text-base lg:text-xl transition-all ease-in-out duration-300 group-focus-within:text-amber-600">
        <h1 className="list-disc font-medium">{question}</h1>
        <FontAwesomeIcon
          icon={faCircleArrowDown}
          className="transition-all ease-in-out duration-300 group-focus-within:rotate-180"
        />
      </div>
      <li className="text-stone-300 transition-all ease-in-out list-disc duration-500 text-base md:text-lg overflow-hidden max-h-0 group-focus-within:max-h-screen group-focus-within:pt-3">
        {answer}
      </li>
    </div>
  );
}
