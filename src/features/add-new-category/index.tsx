import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import AddNewCategoryForm from "./ui/add-new-category-form";
import React from "react";
import axios from "@/shared/axios";

interface DrawerAddNewCategoryProps {
  type: "post" | "put";
  categoryId?: string;
}

const DrawerAddNewCategory = ({
  type,
  categoryId,
}: DrawerAddNewCategoryProps) => {
  const [initialData, setInitialData] = React.useState<{ name?: string }>({});

  const fetchCategory = async (id: string) => {
    try {
      const res = await axios.get(`/food/categories/${id}/`);
      setInitialData({ name: res.data.name });
    } catch (error) {
      console.error("Kategoriya yuklanmadi:", error);
    }
  };

  React.useEffect(() => {
    if (type === "put" && categoryId) {
      fetchCategory(categoryId);
    }
  }, [type, categoryId]);

  return (
    <Drawer>
      <DrawerTrigger
        className={`border text-sm w-full ${type === "post" ? "p-4" : "p-2 text-primary"} rounded-full font-semibold`}
      >
        {type === "post" ? (
          "Yangi kategoriya qo'shish"
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
          </svg>
        )}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {type === "post"
              ? "Yangi kategoriya qo'shish"
              : "Kategoriyani tahrirlash"}
          </DrawerTitle>
        </DrawerHeader>
        <main className="p-4">
          <AddNewCategoryForm
            type={type}
            categoryId={categoryId}
            initialData={initialData}
          />
        </main>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerAddNewCategory;
