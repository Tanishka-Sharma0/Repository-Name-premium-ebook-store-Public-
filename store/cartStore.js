import { create } from "zustand";
import { toast } from "sonner";

const useCartStore = create((set) => ({
    items: [],

    addToCart: (book) =>
        set((state) => {
            const exists = state.items.find((item) => item.id === book.id);

            if (exists) {
                toast.info("Already in cart");
                return state;
            }

            toast.success("Added to cart");

            return {
                items: [...state.items, book],
            };
        }),

    removeFromCart: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),

    clearCart: () => set({ items: [] }),
}));

export default useCartStore;