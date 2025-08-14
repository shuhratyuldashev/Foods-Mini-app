import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import FormAddNewEmployer from "./ui/add-customer-drawer";
import { EmployerFormData } from "./models/schema";

interface DrawerAddNewEmployerProps {
  type: "post" | "put";
  initialData?: Partial<EmployerFormData>;
  employerId?: string;
}

const DrawerAddNewEmployer = ({
  type,
  initialData,
  employerId,
}: DrawerAddNewEmployerProps) => {
  return (
    <Drawer>
      <DrawerTrigger
        asChild={type === "put"}
        className="border text-sm w-full p-4 rounded-full font-semibold"
      >
        {type === "post" ? (
          "Yangi xodim qo'shish"
        ) : (
          <button className="border-primary border-2 w-full font-semibold p-4 rounded-full text-primary">
            Edit Employer
          </button>
        )}
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {type === "post" ? "Yangi xodim qo'shish" : "Xodimni tahrirlash"}
          </DrawerTitle>
        </DrawerHeader>

        <main className="p-4">
          {/* 👇 Подключаем форму с нужными пропсами */}
          <FormAddNewEmployer
            type={type}
            initialData={initialData}
            employerId={employerId}
          />
        </main>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerAddNewEmployer;
