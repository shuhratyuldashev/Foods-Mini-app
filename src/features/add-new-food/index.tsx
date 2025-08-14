import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import { FoodFormData } from "./models/form";
import { useAddOrUpdateFood } from "./hooks/useAddOrUpdateFood";
import AddNewFoodForm from "./ui/add-new-food-form";

interface DrawerAddNewFoodProps {
  type: "post" | "put";
  initialData?: Partial<FoodFormData>;
  foodId?: string;
}

const DrawerAddNewFood = ({
  type,
  foodId,
  initialData,
}: DrawerAddNewFoodProps) => {
  const { categories, form, imageBase64, handleUploadImage, onSubmit } =
    useAddOrUpdateFood({ type, initialData, foodId });

  return (
    <Drawer>
      <DrawerTrigger
        asChild={type === "put"}
        className={`border text-sm w-full ${type == "put" ? "p-2" : "p-4"} rounded-full font-semibold`}
      >
        {type === "post" ? (
          "Yangi mahsulot qo'shish"
        ) : (
          <button className="p-2 border rounded-full text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
          </button>
        )}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {type === "post"
              ? "Yangi mahsulot qo'shish"
              : "Mahsulotni tahrirlash"}
          </DrawerTitle>
        </DrawerHeader>
        <main className="p-4">
          <AddNewFoodForm
            form={form}
            categories={categories}
            imageBase64={imageBase64}
            handleUploadImage={handleUploadImage}
            onSubmit={onSubmit}
            type={type}
          />
        </main>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerAddNewFood;
