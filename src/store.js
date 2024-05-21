import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialItems = [];

export const useStore = create(
  persist(
    (set) => ({
      items: initialItems,
      //   ------------------
      addItem: (newItemText) => {
        set((state) => {
          const newItem = {
            id: state.items.length + 1,
            name: newItemText,
            packed: false,
          };
          const newItems = [...state.items, newItem];
          return { items: newItems };
        });
      },
      //   ------------------
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      //   ------------------
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newItems };
        });
      },
      //   ------------------
      removeAllItems: () => set({ items: [] }),
      //   ------------------
      resetToInitial: () => set({ items: initialItems }),
      //   ------------------
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({
            ...item,
            packed: true,
          }));
          return { items: newItems };
        });
      },
      //   ------------------
      markAllAsInComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({
            ...item,
            packed: false,
          }));
          return { items: newItems };
        });
      },
    }),
    {
      name: "items",
    }
  )
);
