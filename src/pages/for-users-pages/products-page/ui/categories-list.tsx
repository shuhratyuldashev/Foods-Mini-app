import { Category } from "@/shared/types/types";
import CategoryCard from "../../../../entities/category-card";

interface CategoryListProps {
  setCurrentCategory: (id: string) => void;
  currentCategory: string;
  categories: Category[];
}

const CategoriesList = ({
  categories,
  setCurrentCategory,
  currentCategory,
}: CategoryListProps) => (
  <ul className="flex gap-4 mt-4 list-none p-1 overflow-x-auto">
    {categories.map((c) => (
      <CategoryCard
        category={c}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        key={c.id}
      />
    ))}
  </ul>
);

export default CategoriesList;
