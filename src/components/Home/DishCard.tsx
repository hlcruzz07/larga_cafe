type DishCardProp = {
  image: string;
  title: string;
  text: string;
  [key: string]: string;
};
export default function DishCard({
  image,
  title,
  text,
  ...rest
}: DishCardProp) {
  return (
    <div className="flex flex-col text-center items-center group" {...rest}>
      <div className="group-hover:transform-[rotateY(360deg)] transition-all duration-700 ease-in-out">
        <img src={image} className="w-80 h-80 object-cover" alt={image} />
      </div>

      <h1 className="text-white font-extrabold text-2xl">{title}</h1>
      <p className="text-stone-300">{text}</p>
    </div>
  );
}
