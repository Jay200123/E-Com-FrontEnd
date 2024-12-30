import { Image } from "./image";

interface User {
  _id: string;
  fullname: string;
  contact_number: string;
  address: string;
  city: string;
  email: string;
  role: string;
  image: Image[];
}

interface UserState {
  message: string;
  getAllUsers: () => Promise<void>;
  getUserById: (id: string) => Promise<void>;
  addUser: (formData: FormData) => Promise<void>;
  updateUserById: (id: string, formData: FormData) => Promise<void>;
  deleteUserById: (id: string) => Promise<void>;
}

export type { User, UserState };
