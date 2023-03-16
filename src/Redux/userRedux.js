import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    user:{},
    cart:{
      userId : "",
      products:[],
      total:0
    }
   
}

const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    submituser:(state,action) => {
        state.user = action.payload
        state.cart.userId = action.payload._id
    },
    submitcart:(state,action) => {
      let  total = 0;
      state.cart.products = [...state.cart.products,action.payload]
      state.cart.total = parseInt(state.cart.products.map((item) => total = total + item.subtotal ))
  },
  cleancart:(state,action) => {
    state.cart = {
      userId : "",
      products:[],
      total:0
    }
},
logoutuser:(state,action) => {
  state.user  = {}
},
changeqauntity:(state,action) => {
 state.cart.products.map((item,i) => {
      if(item._id === action.payload._id) {
       state.cart.products[i].quantity = action.payload.quantity
        state.cart.products[i].subtotal = action.payload.quantity * state.cart.products[i].price
    
     
      }
     
      return state.cart
    })

},
removecartitems:(state,action) => {
  state.cart.products = state.cart.products.filter((item,i) => item._id !== action.payload._id)
 },
 addtotal:(state,action) => {
    state.cart.total = action.payload.total
 }


  
 
  },
})

export const { submituser,submitcart,cleancart,logoutuser,changeqauntity,removecartitems,addtotal} = counterSlice.actions
export default counterSlice.reducer