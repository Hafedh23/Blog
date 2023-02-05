import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:  localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  
    quantity:0,
    price:0,
  },
        reducers:{ 
    // addToCart: (state, action) => {
    //   const itemInCart = state.cart.find((item) => item.id === action.payload.id);
    //   if (itemInCart) {
    //     itemInCart.quantity++;

    //   } else {
    //     state.cart.push({ ...action.payload, quantity: 1 }
    //       );
          
    //   }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        // toast.info("Decreased product quantity", {
        //   position: "bottom-left",
        // });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        // toast.error("Product removed from cart", {
        //   position: "bottom-left",
        // });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
      //********************/
      //solution avec findIndex====> state.cart.indexof((item) => item.id === action.payload.id);

 
      // const existingIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (existingIndex >= 0) {
      //   state.cartItems[existingIndex] = {
      //     ...state.cartItems[existingIndex],
      //     cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
      //   };
      // } else {
      //   let tempProductItem = { ...action.payload, cartQuantity: 1 };
      //   state.cartItems.push(tempProductItem);
      // }
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));


    // incrementQuantity: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload);
    //   item.quantity++;
    // },
    // decrementQuantity: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload);
    //   if (item.quantity === 1) {
    //     item.quantity = 1
    //   } else {
    //     item.quantity--;
    //   }
    // },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
    getTotals: (state) => {
      let cardQuantity = 0
      state.cardArticles.map((item) => cardQuantity += item.quantity)
      state.totalQuantity = cardQuantity
      let cardPrice = 0
      state.cardArticles.map((item) => cardPrice += item.quantity*item.price)
      state.totalPrice = cardPrice
    },

    clearCart :(state
      )=> {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  decreaseCart,
  getTotals,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;