import { toast } from "sonner";
import { TranslateFormValues } from "./formSchema";
import axios from "axios";

const API_URL = process.env.VITE_API_URL

const SuccesToast = () => {
  return (
    <div className="bg-green-600 text-white p-4 rounded-md min-w-[370px] shadow-md">
      <h3 className="font-bold">Перевод Выполнен</h3>
      <p>Перевод вашего текста успешно выполнен!</p>
    </div>
)}

const ErrorToast = ({ err }: { err: string}) => {
  return (
    <div className="bg-rose-600 text-white p-4 rounded-md min-w-[370px] shadow-md">
      <h2 className="text-lg font-bold">Ошибка!</h2>
      <p>{err}</p>
    </div>
)}



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
    toast.custom(() => <ErrorToast err="Ошибка перевода, попробуйте позже"/>);
    return null;
  }
};

export const onSubmitTranslate = async (
  data: TranslateFormValues,
  from: string,
  to: string
) => {
  if (!data.text.trim()) {
    return toast.custom(() => <ErrorToast err="Поле не может быть пустым"/>);
  }

  const translatedText = await translateText(data.text, from, to);

  if (translatedText) {
    toast.custom(() => <SuccesToast />);
    console.log("Переведённый текст:", translatedText);
    return { result: translatedText };
  }
};
