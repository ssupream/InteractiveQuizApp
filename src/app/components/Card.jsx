import Link from "next/link";
import randomColor from "randomcolor";

const Card = ({ directory, category }) => {
  return (
    <Link href={`${directory}/${category.id}`} className="pointer">
      <div
        className="flex flex-col justify-center items-center h-60 rounded-2xl bg-black/20 shadow-md hover:brightness-125"
        style={{
          backgroundColor: randomColor({
            luminosity: "dark",
            format: "rgba",
            alpha: 0.6,
          }),
        }}
      >
        <h3
          className="text-3xl font-black drop-shadow-lg "
          style={{
            color: randomColor({
              luminosity: "light",
            }),
          }}
        >
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
