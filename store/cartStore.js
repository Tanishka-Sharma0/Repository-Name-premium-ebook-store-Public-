// store/cartStore.js
import { create } from 'zustand';
import { toast } from 'sonner';

const useCartStore = create((set) => ({
    items: [],

    addToCart: (book) =>
        set((state) => {
            const exists = state.items.find((item) => item.id === book.id);

            if (exists) {
                toast.info("Already in your cart", {
                    description: "You can only add one copy of each book",
                });
                return state;
            }

            toast.success("Added to Cart", {
                description: `${book.title} has been added`,
                action: {
                    label: "View Cart",
                    onClick: () => window.dispatchEvent(new Event('openCart')),
                },
            });

            return {
                items: [...state.items, { ...book, quantity: 1 }],
            };
        }),

    removeFromCart: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),

    updateQuantity: (id, quantity) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            ),
        })),

    clearCart: () => set({ items: [] }),

    getTotalPrice: (state) =>
        state.items.reduce((total, item) => total + item.price * item.quantity, 0),
}));

export default useCartStore;