import { useProductStore } from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

type Category = "Mobile" | "Laptop" | "Computer" | "Tablet";
type TypeCount = Record<Category, number>;

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function () {
  const { getAllProducts } = useProductStore();

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });


  const categoryCount = products.reduce<TypeCount>((acc, device) => {
    if (device.category in acc) {
      acc[device.category] = (acc[device.category] || 0) + 1;
    }
    return acc;
  }, {
    Laptop: 0,
    Mobile: 0,
    Computer: 0,
    Tablet: 0,
  });

  const chartData = {
    labels: Object.keys(categoryCount), 
    datasets: [
      {
        label: "Product Count by Category",
        data: Object.values(categoryCount),
        backgroundColor: ["#4caf50", "#2196f3", "#f44336", "#ff9800"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-1/2 m-4 flex items-center justify-center max-h-[250px] md:h-[350px]">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        }}
      />
    </div>
  );
}
