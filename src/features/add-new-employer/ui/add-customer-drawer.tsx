import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployerFormData, employerSchema } from "../models/schema";
import React from "react";
import { onSubmitAddEmployer } from "../lib/on-submit-add-employer";

interface DrawerAddNewEmployerProps {
  type: "post" | "put";
  initialData?: Partial<EmployerFormData>;
  employerId?: string;
}

const FormAddNewEmployer = ({
  type,
  initialData,
  employerId,
}: DrawerAddNewEmployerProps) => {
  const form = useForm<EmployerFormData>({
    resolver: zodResolver(employerSchema),
    defaultValues: {
      username: initialData?.username ?? "",
      fullname: initialData?.fullname ?? "",
      phone_number: initialData?.phone_number ?? "",
    },
  });

  React.useEffect(() => {
    if (initialData) {
      form.reset(initialData);
    }
  }, [initialData, form]);

  const handleSubmit = (values: EmployerFormData) => {
    onSubmitAddEmployer(values, type, employerId);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To‘liq ism</FormLabel>
              <FormControl>
                <Input placeholder="Ism Familiya" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon raqam</FormLabel>
              <FormControl>
                <Input placeholder="+998..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Label>Rasm (hozircha ishlamaydi)</Label>
          <Input type="file" disabled />
        </div>

        <Button type="submit" className="w-full">
          {type === "post"
            ? "Yangi xodimni yuborish"
            : "O'zgarishlarni saqlash"}
        </Button>
      </form>
    </Form>
  );
};

export default FormAddNewEmployer;
