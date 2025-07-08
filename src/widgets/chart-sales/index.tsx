import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/ui/chart";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

interface ChartSalesProps {
  isWeekly: boolean;
  mothsly?: Array<{ id: number; label: string; count: number }>;
  weekly?: Array<{ id: number; label: string; count: number }>;
}

const chartConfig = {
  sales: {
    label: "Sotuvlar",
    color: "hsla(33, 100%, 50%, 1);",
  },
} satisfies ChartConfig;

const ChartSales = ({ isWeekly, mothsly, weekly }: ChartSalesProps) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[300px] w-full overflow-x-scroll p-2 border rounded-md shadow"
    >
      <BarChart accessibilityLayer data={isWeekly ? weekly : mothsly}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value: string) => value.slice(0, 10)}
        />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar
          dataKey="count"
          name="sales"
          fill="var(--color-sales)"
          radius={8}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default ChartSales;
