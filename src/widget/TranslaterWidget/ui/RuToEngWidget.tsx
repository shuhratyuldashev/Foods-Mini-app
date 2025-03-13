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
        <TabsTrigger value="en">
          Eng <MoveRight /> Ru
        </TabsTrigger>
      </TabsList>
      <TabsContent value="ru">
        <TranslaterForm current="ru" translated="en" />
      </TabsContent>
      <TabsContent value="en">
        <TranslaterForm current="en" translated="ru" />
      </TabsContent>
    </Tabs>
  );
};

export default RuToEngWidget;
