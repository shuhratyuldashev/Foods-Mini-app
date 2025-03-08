import { MoveRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../shared/ui/tabs";
import TranslaterForm from "../../../features/TranslaterForm";

const RuToEngWidget = () => {
  return (
    <Tabs defaultValue="ru" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="ru">
          Ru <MoveRight /> Eng
        </TabsTrigger>
        <TabsTrigger value="eng">
          Eng <MoveRight /> Ru
        </TabsTrigger>
      </TabsList>
      <TabsContent value="ru">
        <TranslaterForm current="ru" translated="eng" />
      </TabsContent>
      <TabsContent value="eng">
        <TranslaterForm current="eng" translated="ru" />
      </TabsContent>
    </Tabs>
  );
};

export default RuToEngWidget;
