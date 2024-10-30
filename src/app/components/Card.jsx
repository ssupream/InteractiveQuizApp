import Link from "next/link";
import RandomColorSetter from "./utils/RandomColorSetter";

const Card = ({ directory, category }) => {
  const categoryId = category.id;
  const { backgroundColor, textColor } = RandomColorSetter(categoryId);

  console.log(directory);

  return (
    <Link href={`${directory}`} className="pointer">
      <div
        className="flex flex-col justify-center items-center h-60 rounded-2xl bg-black/20 shadow-md hover:brightness-125"
        style={{
          backgroundColor,
        }}
      >
        <h3
          className="text-3xl font-black drop-shadow-lg"
          style={{
            color: textColor,
          }}
        >
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
