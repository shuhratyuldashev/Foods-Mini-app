import CategoryCard from "../../../../entities/category-card";

interface Category {
  id: number;
  name: string;
  img: string;
}

interface CategoryListProps {
  setCurrentCategory: (id: number) => void;
  currentCategory: number;
  products_categories: Category[];
}

const CategoriesList = ({
  products_categories,
  setCurrentCategory,
  currentCategory,
}: CategoryListProps) => (
  <ul className="flex gap-4 mt-4 list-none justify-evenly p-1 overflow-x-auto">
    {products_categories.map((c) => (
      <CategoryCard
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        category={c}
        key={c.id}
      />
    ))}
  </ul>
);

export default CategoriesList;
