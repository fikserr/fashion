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
  products: [],
  error: null,
  productsData: [],
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
        item?.category?.toLowerCase().split("-")[0] === ingredient
      );
    },
    filterNew(state) {
      const daysAgo30 = new Date();
      daysAgo30.setDate(daysAgo30.getDate() - 30);
      console.log(daysAgo30);
      state.products = state.productsData.filter(product => 
        new Date(product.meta.createdAt) >= daysAgo30
      );
    },
    filterByPrice(state, action) {
      const { minPrice, maxPrice } = action.payload;
      state.products = state.productsData.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    },
    resetFilter(state) {
      state.products = state.productsData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.productsData = action.payload.products;
        state.total = action.payload.total;
        

        const path = action.meta.arg;
        if (/\?limit=\d+&skip=\d+/.test(path) ||
            /\?q=/.test(path) ||
            /\?limit=\d+/.test(path)) {
          state.products = action.payload.products;
        }
      })
      .addCase(getData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { filterWomen, resetFilter,filterNew,filterByPrice } = dataSlice.actions;

export default dataSlice.reducer;
