import { toast } from "sonner";
import { TranslateFormValues } from "./formSchema";
import axios from "axios";

const API_URL = process.env.VITE_API_URL

const translateText = async (text: string, from: string, to: string) => {
  try {
    const response = await axios.post(`${API_URL}`, {
      text,
      from,
      to,
    })
    console.log(response)
    return response.data;
  } catch (error) {
    toast.custom(() => (
      <div className="bg-rose-600 text-white p-4 rounded-md min-w-[400px] shadow-md">
        <h2 className="text-lg font-bold">Ошибка перевода</h2>
        <p>Ошибка перевода, попробуйте позже</p>
      </div>
    ));
    return null;
  }
};

export const onSubmitTransLate = async (
  data: TranslateFormValues,
  from: string,
  to: string
) => {
  if (!data.text.trim()) {
    return toast.custom(() => (
      <div className="bg-rose-600 text-white p-4 rounded-md shadow-md min-w-[400px]">
        <h2 className="text-lg font-bold">Ошибка</h2>
        <p>Поле не может быть пустым</p>
      </div>
    ));
  }

  const translatedText = await translateText(data.text, from, to);

  if (translatedText) {
    toast.custom(() => (
      <div className="bg-green-600 text-white p-4 rounded-md min-w-[400px] shadow-md">
        <h3 className="font-bold">Перевод Выполнен</h3>
      </div>
    ));;
    console.log("Переведённый текст:", translatedText);
    return { result: translatedText };
  }
};
