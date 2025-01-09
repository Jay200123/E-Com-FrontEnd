import { useProductStore } from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function () {
  const { getAllProducts } = useProductStore();

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });


  const brandCounts = products.reduce<Record<string, number>>((acc, product) => {
    const brandName = product.brand.brand_name;
    acc[brandName] = (acc[brandName] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(brandCounts),
    datasets: [
      {
        label: "Product Count by Brand",
        data: Object.values(brandCounts),
        backgroundColor: ["#4caf50", "#2196f3", "#f44336", "#ff9800", "#ff5722", "#9c27b0"], // Custom colors for each brand
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-1/2 m-4 flex items-center justify-center max-h-[250px] md:h-[350px]">
      <Pie
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  const brand = tooltipItem.label;
                  const count = tooltipItem.raw;
                  return `${brand}: ${count} products`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
