import Link from "next/link";

const Navbar = ({ components }) => {
  return (
    <div className="flex justify-center items-center w-full m-auto h-14 absolute top-0 left-0 bg-black/40">
      <ul className="w-full flex justify-around">
        <li>
          <Link className="font-semibold  hover:border-b-2" href={`/home`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="font-semibold  hover:border-b-2"
            href={`/home/solutions`}
          >
            See solutions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
