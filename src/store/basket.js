
import { createSlice } from '@reduxjs/toolkit';


const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('basketState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn('Could not load state from localStorage', e);
    return undefined;
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('basketState', serializedState);
  } catch (e) {
    console.warn('Could not save state to localStorage', e);
  }
};

const initialState = loadStateFromLocalStorage() || {
  basket: [],
  activeLike: [],
  totalPrice: 0,
  detailId: [],
};

const calculateTotalPrice = (basket) => {
  return basket.reduce((total, item) => total + item.price, 0);
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    setProducts(state, action) {
      const existingItem = state.basket.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.basket);
      saveStateToLocalStorage(state);
    },
    deleteProducts(state, action) {
      state.basket = state.basket.filter(item => item.id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.basket);
      saveStateToLocalStorage(state);

    },
    addOne(state, action) {
      state.basket = state.basket.map(item => {
        if (item.id === action.payload) {
          const newQuantity = item.quantity + 1;
          return { ...item, quantity: newQuantity, price: (item.price / item.quantity) * newQuantity };
        }
        return item;
      });
      state.totalPrice = calculateTotalPrice(state.basket);
      saveStateToLocalStorage(state);
    },
    removeOne(state, action) {
      state.basket = state.basket.map(item => {
        if (item.id === action.payload && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          return { ...item, quantity: newQuantity, price: (item.price / item.quantity) * newQuantity };
        }
        return item;
      });
      state.totalPrice = calculateTotalPrice(state.basket);
      saveStateToLocalStorage(state);
    },
    setLike(state, action) {

      const existingItem = state.activeLike.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.activeLike.push({ ...action.payload, like: true});
      }else if (existingItem) {
        state.activeLike = state.activeLike.filter(item => item.id !== action.payload.id)
      }
      


      saveStateToLocalStorage(state);
    },
    setDetail(state,action){
      state.detailId = action.payload
    }
  },
});

export const { setProducts, deleteProducts, addOne, removeOne, setLike,setDetail } = basketSlice.actions;

export default basketSlice.reducer;
