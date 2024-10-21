import Link from "next/link";
import Card from "../components/Card";
import categoriesData from "../../../public/categories";

const homepage = () => {
  return (
    <div className="flex flex-col gap-20 justify-around max-w-screen-xl mx-auto px-4 md:gap-6 md:h-screen ">
      <div className="flex flex-col ">
        <div className="flex justify-center items-center h-fit ">
          <h1 className="text-8xl h-500 font-extrabold text-teal-300">
            Next <br></br> Quiz
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-fit mx-auto flex-shrink-0">
        <h2 className="font-bold text-5xl">Ready to challenge your brain?</h2>
        <p className="self-start text-slate-100/70">
          Explore our diverse range of quizzes and discover new facts.
        </p>
      </div>

      <div className="flex flex-col gap-4 flex-shrink-0">
        <Link
          href="/home/categories/"
          className="text-purple-200 text-2xl font-bold px-4 py-3 border-2 border-purple-400 rounded-3xl max-w-max hover:brightness-125 "
        >
          Explore all categories
        </Link>

        <div className="grid grid-cols-1 gap-4  bg-black/20 rounded-3xl p-4 md:grid-cols-2 lg:grid-cols-3 sm:my-2 ">
          {categoriesData.map((category) => (
            <Card
              key={category.id}
              directory={"/categories"}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default homepage;
