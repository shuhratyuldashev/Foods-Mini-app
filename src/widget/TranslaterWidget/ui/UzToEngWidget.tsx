import { MoveRight } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../shared/ui/tabs";
import TranslaterForm from "../../../features/TranslaterForm";

const UzToEngWidget = () => {
  return (
    <Tabs defaultValue="uz" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="uz">
          Uz <MoveRight /> Eng
        </TabsTrigger>
        <TabsTrigger value="eng">
          Eng <MoveRight /> Uz
        </TabsTrigger>
      </TabsList>
      <TabsContent value="uz">
        <TranslaterForm current="uz" translated="eng" />
      </TabsContent>
      <TabsContent value="eng">
        <TranslaterForm current="eng" translated="uz" />
      </TabsContent>
    </Tabs>
  );
};

export default UzToEngWidget;
