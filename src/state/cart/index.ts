import { Product } from "../../interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { encryptedSessionStorage } from "../../storage";

type CartState = {
  cart: Product[];
  addProduct: (product: Product, quantity:number) => void;
  incrementQuantity: (_id: string) => void;
  decrementQuantity: (_id: string) => void;
  removeProduct: (_id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      quantity: 1,
      addProduct: (product: Product, quantity: number) => {
        set((state) => {
          const updatedCart = [...state.cart, {...product, orderQuantity: quantity}];  
          const existingProduct = state.cart.find((p) => p._id === product._id);

          if (existingProduct) {
            return {
              ...state,
              cart: state.cart.map((p) =>
                p._id === product._id
                  ? { ...p, orderQuantity: p.orderQuantity + 1 }
                  : p
              ),
            };
          }

          return {
            ...state,
            cart: updatedCart,
          };
        });
      },
      incrementQuantity: (_id: string) => {
        set((state) => {
          return {
            ...state,
            cart: state.cart.map((p) =>
              p._id === _id
                ? {
                    ...p,
                    orderQuantity: p.orderQuantity + 1,
                  }
                : p
            ),
          };
        });
      },
      decrementQuantity: (_id: string) => {
        set((state) => {
          return {
            ...state,
            cart: state.cart.map((p) =>
              p._id === _id
                ? {
                    ...p,
                    orderQuantity: p.orderQuantity - 1,
                  }
                : p
            ),
          };
        });
      },
      removeProduct: (_id: string) => {
        set((state) => {
          const updatedCart = state.cart.filter((p) => p._id !== _id);
          sessionStorage.setItem("cart", JSON.stringify(updatedCart));

          return {
            ...state,
            cart: updatedCart,
          };
        });
      },
      clearCart: () => {
        set(() => {
          sessionStorage.removeItem("cart-storage");

          return {
            cart: [],
            quantity: 0,
          };
        });
      },
    }),
    {
      name: "cart-storage",
      storage: encryptedSessionStorage,
    }
  )
);
