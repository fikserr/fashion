import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
  "data/getData",
  async (path, { rejectWithValue }) => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };
      const response = await fetch(
        `https://dummyjson.com/products${path}`,
        options
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        products: data.products,
        total: data.total,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: null,
  error: null,
  productsData: null,
  total: 0,
  itemPerPage: 12,
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    filterWomen(state, action) {
      const ingredient = action.payload.toLowerCase();
      state.products = state.productsData.filter(item =>
        item?.category?.toLowerCase()?.split('-')[0] === ingredient
      );

    },

    resetFilter(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        const path = action.meta.arg
          state.products = action.payload.products;
          state.productsData = action.payload.products;
   


        state.total = action.payload.total;
      })
      .addCase(getData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { filterWomen, resetFilter, filterCatalog } = dataSlice.actions;

export default dataSlice.reducer;
