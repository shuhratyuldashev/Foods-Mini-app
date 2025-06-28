interface CategoryCardProps {
  setCurrentCategory: (id: number) => void;
  currentCategory: number;
  category: {
    id: number;
    name: string;
    img: string;
  };
}

const CategoryCard = ({
  setCurrentCategory,
  currentCategory,
  category,
}: CategoryCardProps) => (
  <li
    onClick={() => setCurrentCategory(category.id)}
    className={`px-4 py-2 shadow ${currentCategory === category.id ? "bg-primary text-white" : "text-gray-400 bg-white"} text-sm font-medium rounded-md flex flex-col items-center justify-center gap-2 transition duration-500 active:scale-90 max-w-[60px]`}
    key={category.id}
  >
    <img src={category.img} alt={category.name} />
    <p>{category.name}</p>
  </li>
);

export default CategoryCard;
