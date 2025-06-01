import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    // quantity: number;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            // if (existingItem) {
            //     existingItem.quantity += newItem.quantity;
            // } else {
                state.items.push(newItem);
            // }

            // state.totalQuantity += newItem.quantity;
            // state.totalAmount += newItem.price * newItem.quantity;
        },

        // ✅ New reducer to add multiple items
        addMultipleToCart: (state, action: PayloadAction<CartItem[]>) => {
            const newItems = action.payload;

            for (const newItem of newItems) {
                const existingItem = state.items.find(item => item.id === newItem.id);

                // if (existingItem) {
                //     existingItem.quantity += newItem.quantity;
                // } else {
                    state.items.push({ ...newItem });
                // }

                // state.totalQuantity += newItem.quantity;
                // state.totalAmount += newItem.price * newItem.quantity;
            }
        },

        // removeFromCart: (state, action: PayloadAction<string>) => {
        //     const id = action.payload;
        //     const existingItem = state.items.find(item => item.id === id);

        //     if (existingItem) {
        //         state.totalQuantity -= existingItem.quantity;
        //         state.totalAmount -= existingItem.price * existingItem.quantity;
        //         state.items = state.items.filter(item => item.id !== id);
        //     }
        // },

        // updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
        //     const { id, quantity } = action.payload;
        //     const item = state.items.find(item => item.id === id);

        //     if (item) {
        //         const quantityDifference = quantity - item.quantity;
        //         item.quantity = quantity;
        //         state.totalQuantity += quantityDifference;
        //         state.totalAmount += item.price * quantityDifference;
        //     }
        // },

        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }
    }
});

export const {
    addToCart,
    addMultipleToCart,
    // removeFromCart,
    // updateQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
