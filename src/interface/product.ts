import { Brand } from "./brand";
import { Image } from "./image";

type Category = "Mobile" | "Laptop" | "Computer" | "Tablet";


interface Product {
  product: any;
  _id: string;
  brand: Brand;
  product_name: string;
  price: number;
  description: string;
  color: string;
  quantity: number;
  orderQuantity: number;  
  category: Category;
  isNewlyCreated: boolean;
  image: Image[];
}

interface ProductState {
  products: Product[];	
  loading: boolean;
  message: string;
  getAllProducts: () => Promise<Product[]>;
  getAllMobiles: () => Promise<Product[]>;  
  getAllLaptops: () => Promise<Product[]>;
  getAllComputers: () => Promise<Product[]>;
  getProductById: (id: string) => Promise<Product>;
  addProduct: (data: FormData) => Promise<void>;
  updateProduct: (id: string, data: FormData) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

export type { Product, ProductState };
