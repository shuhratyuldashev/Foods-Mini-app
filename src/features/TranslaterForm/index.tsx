import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "../../shared/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../../shared/ui/textarea";
import { Button } from "../../shared/ui/button";
import { MoveRight } from "lucide-react";
import { translateSchema, onSubmitTransLate } from "./models";
import { TranslateFormValues } from "./models/formSchema";
import { useState } from "react";

interface TranslaterFormProps {
  current: string;
  translated: string;
}


const TranslaterForm = ({ current, translated }: TranslaterFormProps) => {
  const [result, setResult] = useState<string>("Перевод"); 
  const form = useForm<TranslateFormValues>({
    resolver: zodResolver(translateSchema),
    mode: "onChange",
    defaultValues: {
      text: "",
    },
  });

  
  const handleSubmit = async (
    data: { text: string },
    current: string,
    translated: string
  ) => {
    const res: any = await onSubmitTransLate(data, current, translated);
    if (res?.result) {
      setResult(res.result);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) =>
          handleSubmit(data, current, translated),
        )}
        className="flex justify-between gap-2 relative"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <Textarea
                className="w-full min-h-[190px]"
                placeholder="Введите текст"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={!form.formState.isValid}
          className="absolute left-[50%] top-[50%] translate-[-50%] rounded-full"
          size="icon"
        >
          <MoveRight />
        </Button>
        <div className="bg-gray-100 px-4 py-2 w-1/2 rounded-sm">{result}</div>
      </form>
    </Form>
  );
};

export default TranslaterForm;
