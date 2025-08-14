import { Category } from "@/shared/types/types";

interface CategoryCardProps {
  setCurrentCategory: (id: string) => void;
  currentCategory: string;
  category: Category;
}

const CategoryCard = ({
  setCurrentCategory,
  currentCategory,
  category,
}: CategoryCardProps) => (
  <li
    onClick={() => setCurrentCategory(category.id)}
    className={`px-4 py-2 shadow-slate-100 shadow ${
      currentCategory === category.id
        ? "bg-primary text-white"
        : "text-gray-400 bg-white"
    } text-sm font-medium rounded-md flex flex-col items-center justify-center gap-2 transition duration-500 active:scale-90`}
  >
    {category.image && <img src={category.image} alt={category.name} />}
    <p>{category.name}</p>
  </li>
);

export default CategoryCard;
