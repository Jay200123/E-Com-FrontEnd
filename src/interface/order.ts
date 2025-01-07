import { Product } from "./product";
import { User } from "./user";

interface Order {
  _id: string;
  products: Product[];
  orderNumber: string;
  date_placed: string;
  date_delivered: string;
  user: User;
  price: number;
  status: string;
  payment: string;
}

interface OrderValues {
  user?: string;
  products: { product: string; quantity: number }[];
  payment: string;
}

interface OrderState {
  message: string;
  getAllOrders: ()=>Promise<Order[]>;
  getOrderById: (id: string)=>Promise<Order>;
  addOrder: (values: OrderValues)=>Promise<void>;
  packedOrder: (id:string) => Promise<void>;
  shippedOrder: (id: string) => Promise<void>;
  deliveredOrder: (id: string)=> Promise<void>;
  updateOrderById: (id: string, formData: FormData)=>Promise<void>; 
  deleteOrderById: (id: string)=>Promise<void>; 
}

export type { Order, OrderState };
