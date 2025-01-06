import DataTable, { TableColumn } from "react-data-table-component";
import { FaEye, FaTrash } from "react-icons/fa";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useUserStore } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { tableCustomStyles } from "../../utils/tableCustomStyles";
import { User } from "../../interface";
import { useState } from "react";

export default function () {
  const navigate = useNavigate();
  const { getAllUsers, deleteUserById } = useUserStore();
  const [findUser, setFindUser] = useState<string>("");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const filteredUsers = data?.filter((u) =>
    u?.fullname?.toLowerCase().includes(findUser.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this User?")) {
      await deleteUserById(id);
      toast.success("User Deleted Successfully");
      refetch();
    }
  };

  const columns: TableColumn<User>[] = [
    {
      name: "Full Name",
      selector: (row) => row?.fullname,
      sortable: true,
    },
    {
      name: "Contact Number",
      selector: (row) => row.contact_number,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
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
            className="mr-2 text-xl text-green-500"
            onClick={() => navigate(`/user/${row._id}`)}
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
    <div className="flex items-center justify-center overflow-hidden bg-none">
      {isLoading ? (
        <div className="mt-8 loader">
          <FadeLoader color="#b3b3ff" loading={true} height={15} width={5} />
        </div>
      ) : (
        <div>
          <div className="max-w-xl p-4 overflow-hidden rounded-lg bg-none md:p-6 md:max-w-6xl">
            <div className="flex items-center justify-between m-2">
              <input
                type="text"
                className="w-1/4 p-1 mb-4 border border-gray-300 rounded-lg placeholder:text-black"
                onChange={(e) => setFindUser(e.target.value)}
                placeholder="Find User by Name"
              />
            </div>
            <DataTable
              title="User Records"
              columns={columns}
              data={filteredUsers || []}
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
