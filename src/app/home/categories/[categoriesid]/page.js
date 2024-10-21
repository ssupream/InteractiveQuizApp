import categoriesData from "../../../../../public/categories";
import Card from "@/app/components/Card";
import Navbar from "@/app/components/Navbar";

const categoriesPage = ({ params }) => {
  const categoryId = params.categoriesid;
  const category = categoriesData.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Category not found</h1>
      </div>
    );
  }
  const subcategories = category.subcategories || [];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-6 justify-around max-w-screen-xl m-auto px-4 pt-20 md:h-screen">
        <h1 className="text-6xl font-bold mx-12">{category.name}</h1>

        <div>
          <p className="text-xl px-2 ">
            Click on a category to start a quiz 😄
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-10">
            {subcategories.map((subcategory) => (
              <Card
                key={subcategory.id}
                directory={`/categories/${category.id}`}
                category={subcategory}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default categoriesPage;
