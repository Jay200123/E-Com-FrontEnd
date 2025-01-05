import { useParams } from "react-router-dom";
import ImageOne from "../../assets/editInfo.jpg";
import { useUserStore } from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import { FadeLoader } from "react-spinners";

export default function () {
  const { id } = useParams<{ id: string }>();
  const { getUserById } = useUserStore();

  const { data, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id!),
    enabled: !!id,
  });

  const back = () => {
    window.history.back();
  };

  return (
    <div className="relative flex items-center w-full h-[36rem] rounded-sm shadow-md">
      <h3
        onClick={back}
        className="absolute ml-1 text-sm font-bold text-left cursor-pointer top-1 left-1 md:text-2xl"
      >
        <i className="mr-1 fa-solid fa-arrow-left"></i>Go Back
      </h3>
      <div className="hidden w-1/2 h-full md:block">
        <img
          src={ImageOne}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>

      {isLoading ? (
        <div className="mt-8 loader">
          <FadeLoader color="#b3b3ff" loading={true} height={15} width={5} />
        </div>
      ) : (
        <div className="flex flex-col w-full h-full p-4 md:w-1/2">
          <h3 className="mb-2 text-3xl font-semibold">User Information</h3>
          <label className="text-black text-[1rem] font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder={data?.fullname}
            className="placeholder:text-gray-700 p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
          />
          <label className="text-black text-[1rem] font-medium">
            Contact Number
          </label>
          <input
            type="text"
            name="contact_number"
            id="contact_number"
            placeholder={data?.contact_number}
            className="placeholder:text-gray-700 p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
          />
          <label className="text-black text-[1rem] font-medium">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder={data?.address}
            className="placeholder:text-gray-700 p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
          />
          <label className="text-black text-[1rem] font-medium">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder={data?.city}
            className="placeholder:text-gray-700 p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
          />
          <label className="text-black text-[1rem] font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={data?.email}
            className="placeholder:text-gray-700 p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
          />
        </div>
      )}
    </div>
  );
}
