import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../shared/ui/tabs";
import RuToEngWidget from "./ui/RuToEngWidget";
import UzToEngWidget from "./ui/UzToEngWidget";
import CustomSelectWidget from "./ui/CustomSelectLang";

const TranslaterWidget = () => {
  return (
    <Tabs defaultValue="ru" className="w-96">
      <TabsList className="w-full">
        <TabsTrigger value="ru">Русский</TabsTrigger>
        <TabsTrigger value="uz">Узбекский</TabsTrigger>
        <TabsTrigger value="custom">Само выбор</TabsTrigger>
      </TabsList>
      <TabsContent value="ru">
        <RuToEngWidget />
      </TabsContent>
      <TabsContent value="uz">
        <UzToEngWidget />
      </TabsContent>
      <TabsContent value="custom">
        <CustomSelectWidget />
      </TabsContent>
    </Tabs>
  );
};

export default TranslaterWidget;
