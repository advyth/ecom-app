import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define types for our cart items
export interface CartItem {
  id: string;
  name: string;
  brand: string;
  size: string;
  color?: string;
  price: number;
  quantity: number;
  image: string;
}

// Define the state type for our cart
interface CartState {
  items: CartItem[];
}

// Initial state for the cart with sample items matching the screenshot
const initialState: CartState = {
  items: [
    {
      id: '1',
      name: 'Elegant Dress',
      brand: 'All Saints',
      size: 'XS',
      color: 'Black',
      price: 559,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '2',
      name: 'Leather Jacket',
      brand: 'Celine',
      size: 'XS',
      color: 'Brown',
      price: 485,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '3',
      name: 'Wool Coat',
      brand: 'Balenciaga',
      size: 'S',
      color: 'Grey',
      price: 485,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
  ],
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (existingItem) {
        // If the item exists, increase the quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // Otherwise add the new item
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: state => {
      state.items = [];
    },
  },
});

// Export actions and reducer
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
