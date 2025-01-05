import DataTable, { TableColumn } from "react-data-table-component";
import { FaEye, FaTrash } from "react-icons/fa";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useProductStore } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { tableCustomStyles } from "../../utils/tableCustomStyles";
import { Product } from "../../interface";
import { useState } from "react";

export default function () {
  const navigate = useNavigate();
  const { getAllProducts, deleteProduct } = useProductStore();
  const [findProduct, setFindProduct] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllProducts,
  });

  const filteredProducts = data?.filter((p) =>
    p?.product_name?.toLowerCase().includes(findProduct.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this Product?")) {
      await deleteProduct(id);
      toast.success("Product Deleted Successfully");
    }
  };

  const columns: TableColumn<Product>[] = [
    {
      name: "Product Name",
      selector: (row) => row?.product_name,
      sortable: true,
    },
    {
      name: "Description",
      cell: (row) => <div className="w-40 truncate">{row.description}</div>,
      sortable: true,
    },
    {
      name: " Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: " Quantity",
      selector: (row) => `${row?.quantity} pcs.`,
      sortable: true,
    },
    {
      name: "Images",
      cell: (row) => {
        const randomImage =
          row.image?.length > 0
            ? row.image[Math.floor(Math.random() * row.image?.length)]
            : null;

        return (
          <div className="grid items-center justify-center">
            {randomImage && (
              <img
                className="object-center w-[75px] h-[75px] m-2 rounded-sm"
                src={randomImage.url}
                alt={randomImage.originalname}
              />
            )}
          </div>
        );
      },
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center text-center">
          <FaEye
            className="mr-2 text-xl text-green-300"
            onClick={() => navigate(`/product/${row._id}`)}
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
    <div className="w-full overflow-hidden bg-none">  
      {isLoading ? (
        <div className="flex justify-center mt-8 loader">
          <FadeLoader color="#b3b3ff" loading={true} height={15} width={5} />
        </div>
      ) : (
        <div>
          <div className="m-3 rounded-lg max-w-xloverflow-hidden md:max-w-6xl ">
            <div className="flex items-center justify-between m-2">
              <input
                type="text"
                className="w-1/4 p-1 mb-4 border border-gray-300 rounded-lg placeholder:text-black"
                onChange={(e) => setFindProduct(e.target.value)}
                placeholder="Find User by Name"
              />
                <button
                onClick={() => toast.error("Feature not available") }
                className="text-[1rem] bg-gray-700 text-white  p-[15px] rounded-md transition-all duration-500  hover:opacity-70 border border-gray"
              >
                Add New Product <i className="fa fa-plus"></i>
              </button>
            </div>
            <DataTable
              title="User Records"
              columns={columns}
              data={filteredProducts || []}
              pagination
              highlightOnHover
              pointerOnHover
              paginationPerPage={10}
              paginationRowsPerPageOptions={[10, 20, 30]}
              customStyles={tableCustomStyles}
            />
          </div>
        </div>
      )}
    </div>
  );
}
