import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const exsistingItem = currentItems.find((item) => item._id === data._id);

        if (exsistingItem) {
          return toast('Item Already in cart.');
        }

        set({ items: [...get().items, data] });
        toast.success('Item added to cart.');
      },
      removeItem: (id) => {
        set({ items: [...get().items.filter((item) => item._id !== id)] });
        toast.success('Item removed from the cart.');
      },
      removeAll: () => set({ items: [] }),
    }),
    { name: 'cart-storage', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useCart;
