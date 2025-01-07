import DataTable, { TableColumn } from "react-data-table-component";
import { FaEye, FaPenAlt, FaTrash } from "react-icons/fa";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useOrderStore } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { tableCustomStyles } from "../../utils/tableCustomStyles";
import { Order } from "../../interface";

export default function () {
  const navigate = useNavigate();
  const { getAllOrders, deleteOrderById } = useOrderStore();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });

  console.log(data);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this Order?")) {
      await deleteOrderById(id);
      toast.success("Order Deleted Successfully");
      refetch();
    }
  };

  const columns: TableColumn<Order>[] = [
    {
      name: "Order Number",
      selector: (row) => row?.orderNumber,
      sortable: true,
    },
    {
      name: "Customer Name",
      selector: (row) => row?.user?.fullname,
      sortable: true,
    },
    {
      name: "No. of Items",
      selector: (row) => row?.products.length,
      sortable: true,
    },
    {
      name: "Products",
      cell: (row) => {
        return (
          <ul className="pl-4 max-w-[200px] overflow-hidden">
            {row?.products?.map((p, index) => (
              <li
                className="text-black truncate"
                key={index}
                title={`${p?.product?.product_name} - ${p?.product?.color}`}
              >
                {p?.product?.product_name} - {p?.product?.color}
              </li>
            ))}
          </ul>
        );
      },
    },
    {
      name: "Order Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Payment",
      selector: (row) => row?.payment,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row?.price,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center text-center">
          <FaEye
            className="mr-2 text-xl text-green-500"
            onClick={() => navigate(`/product/${row._id}`)}
          />
          <FaPenAlt
            className="mr-2 text-xl text-blue-500"
            onClick={() => navigate(`/product/edit/${row._id}`)}
          />
          <FaTrash
            className="text-xl text-red-500"
            onClick={() => handleDelete(row._id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-auto bg-none">
      {isLoading ? (
        <div className="flex justify-center mt-8 loader">
          <FadeLoader color="#b3b3ff" loading={true} height={15} width={5} />
        </div>
      ) : (
        <div className="m-3 rounded-lg md:max-w-6xl ">
          <div className="flex items-center m-2 justif-between"></div>
          <DataTable
            title="Order Records"
            columns={columns}
            data={data || []}
            pagination
            highlightOnHover
            pointerOnHover
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30]}
            customStyles={tableCustomStyles}
          />
        </div>
      )}
    </div>
  );
}
