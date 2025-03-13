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
        <TabsTrigger value="en">
          Eng <MoveRight /> Uz
        </TabsTrigger>
      </TabsList>
      <TabsContent value="uz">
        <TranslaterForm current="uz" translated="en" />
      </TabsContent>
      <TabsContent value="en">
        <TranslaterForm current="en" translated="uz" />
      </TabsContent>
    </Tabs>
  );
};

export default UzToEngWidget;
