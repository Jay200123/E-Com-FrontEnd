import { useOrderStore } from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ImageOne from "../../assets/editInfo.jpg"; 

export default function () {
  const { id } = useParams<{ id: string }>();
  const { getOrderById } = useOrderStore();

  const { data } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrderById(id!),
    enabled: !!id,
  });

  const back = () => {
    window.history.back();
  };


  return(
    <div className="relative flex flex-col w-full h-screen md:flex-row">
    <h3
      onClick={back}
      className="absolute ml-1 text-sm font-bold cursor-pointer top-1 left-1 md:text-2xl"
    >
      <i className="mr-1 fa-solid fa-arrow-left"></i>Go Back
    </h3>

    <div className="hidden h-screen border md:block md:w-1/2">
    
        <img
          src={ImageOne}
          alt="Image One"
          className="object-cover w-full  h-[56rem]"
        />
    </div>

    <div className="flex flex-col w-full h-screen p-4 md:w-1/2">
      <h3 className="mb-1 text-2xl font-semibold">Order Details</h3>
      <div className="flex flex-col mb-1">
        <label
          htmlFor="orderNumber"
          className="text-sm font-medium text-black md:text-base"
        >
          Order Number
        </label>
        <input
          type="text"
          name="orderNumber"
          id="orderNumber"
          readOnly
          placeholder={data?.orderNumber}
          className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
        />
      </div>
      
      <div className="flex flex-col mb-1">
        <label
          htmlFor="user"
          className="text-sm font-medium text-black md:text-base"
        >
          Customer
        </label>
        <input
          type="text"
          name="user"
          id="user"
          readOnly
          placeholder={data?.user?.fullname}
          className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
        />
      </div>

      {/* <div className="flex flex-col mb-1">
        <label
          htmlFor="product_name"
          className="text-sm font-medium text-black md:text-base"
        >
          Product Name
        </label>
        <input
          type="text"
          name="product_name"
          id="product_name"
          readOnly
          placeholder={data?.product_name}
          className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
        />
      </div> */}

      <div className="flex flex-col mb-1">
        <label
          htmlFor="date_placed"
          className="text-sm font-medium text-black md:text-base"
        >
          Date Placed:
        </label>
        <input
          type="string"
          name="date_placed"
          id="date_placed"
          readOnly
          placeholder={data?.date_placed ? new Date(data?.date_placed.toLocaleString()).toISOString().split('T')[0] : 'Not Placed' }        
          className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
        />
      </div>

      <div className="flex flex-col mb-1">
        <label
          htmlFor="date_delivered"
          className="text-sm font-medium text-black md:text-base"
        >
          Date Delivered:
        </label>
        <input
          type="string"
          name="date_delivered"
          id="date_delivered"
          readOnly
          placeholder={data?.date_delivered ? data?.date_delivered : 'Not Delivered'}     
          className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
        />
      </div>

      <div className="flex flex-col mb-1">
        <label
          htmlFor="payment"
          className="text-sm font-medium text-black md:text-base"
        >
          Order Payment
        </label>
        <input
          type="string"
          name="payment"
          id="payment"
          readOnly
          placeholder={data?.payment}
          className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
        />
      </div>

      <div className="flex flex-col mb-1">
        <label
          htmlFor="status"
          className="text-sm font-medium text-black md:text-base"
        >
          Order Status
        </label>
        <input
          type="text"
          name="status"
          id="status"
          readOnly
          placeholder={data?.status}
          className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
        />
      </div>
    </div>
  </div>
  );
}
