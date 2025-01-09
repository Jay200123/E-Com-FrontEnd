import { Bar } from "react-chartjs-2";
import { useOrderStore } from "../../state/store";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import { ChartOptions } from "chart.js";

export default function () {
    ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  
    const { getAllOrders } = useOrderStore();

    const { data: orders } = useQuery({
      queryKey: ["orders"],
      queryFn: () => getAllOrders(),
    });
  
    const ordersPerMonth = orders?.reduce((acc: any, order: any) => {
      const orderDate = new Date(order.date_placed); 
      const month = orderDate.toLocaleString("default", { month: "long" });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});
  
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
  
    // Handle case where ordersPerMonth might be undefined
    const chartData = months.map((month) => ordersPerMonth?.[month] || 0);
  
    const data = {
      labels: months,
      datasets: [
        {
          label: "Number of Orders",
          data: chartData, 
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  
    const options: ChartOptions<'bar'> = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Orders Per Month',
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div className="w-full mt-2">
        <h3 className="mb-4 text-lg font-bold text-center">Orders Per Month</h3>
        <Bar data={data} options={options} />
      </div>
    );
  };