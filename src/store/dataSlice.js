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
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    // filterMen(state, action) {
    //   const ingredient = action.payload.toLowerCase();

    //   if (state.products == null) {
    //     state.products = state.products.filter((product) =>
    //         product?.slug?.some((ing) =>
    //           ing.toLowerCase().includes('men')
    //         )
    //       );
    //   } else {
    //     state.products = null;
    //     state.products = state.products.filter(
    //       (item) => item.category.toLowerCase() === "sushi"
    //     );
    //     state.products = state.products.filter((product) =>
    //       product?.incredients?.some((ing) =>
    //         ing.toLowerCase().includes(ingredient)
    //       )
    //     );
    //   }
    // },
    // filterCatalog(state, action) {
    //   const ctgry = action.payload.toLowerCase();

    //   if (state.sushi == null) {
    //     state.sushi = state.sushi.filter((product) =>
    //       product?.catalog?.some((ing) => ing.toLowerCase().includes(ctgry))
    //     );
    //   } else {
    //     state.sushi = null;
    //     state.sushi = state.products.filter(
    //       (item) => item.category.toLowerCase() === "sushi"
    //     );
    //     state.sushi = state.sushi.filter((product) =>
    //       product?.catalog?.some((ing) => ing.toLowerCase().includes(ctgry))
    //     );
    //   }

    //   if (state.roll == null) {
    //     state.roll = state.roll.filter((product) =>
    //       product?.catalog?.some((ing) => ing.toLowerCase().includes(ctgry))
    //     );
    //   } else {
    //     state.roll = null;
    //     state.roll = state.products.filter(
    //       (item) => item.category.toLowerCase() === "roll"
    //     );
    //     state.roll = state.roll.filter((product) =>
    //       product?.catalog?.some((ing) => ing.toLowerCase().includes(ctgry))
    //     );
    //   }

    //   if (state.set == null) {
    //     state.set = state.set.filter((product) =>
    //       product?.catalog?.some((ing) => ing.toLowerCase().includes(ctgry))
    //     );
    //   } else {
    //     state.set = null;
    //     state.set = state.products.filter(
    //       (item) => item.category.toLowerCase() === "set"
    //     );
    //     state.set = state.set.filter((product) =>
    //       product?.catalog?.some((ing) => ing.toLowerCase().includes(ctgry))
    //     );
    //   }

    //   if (state.sneaks == null) {
    //     state.sneaks = state.sneaks.filter((product) =>
    //       product?.catalog?.some((ing) => ing.toLowerCase().includes(ctgry))
    //     );
    //   } else {
    //     state.sneaks = null;
    //     state.sneaks = state.products.filter(
    //       (item) => item.category.toLowerCase() === "sneaks"
    //     );
    //     state.sneaks = state.sneaks.filter((product) =>
    //       product?.catalog?.some((ing) => ing.toLowerCase().includes(ctgry))
    //     );
    //   }
    // },

    resetFilter(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        const path = action.meta.arg
        if (path.includes('?limit=12')) {
            state.products = action.payload.products;
            state.productsData = action.payload.products;
        }else if (path.includes('?sortBy=title=men&order=asc')) {
            state.products = action.payload.products;
        }
    
        
        state.total = action.payload.total;
      })
      .addCase(getData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { filterMen, resetFilter, filterCatalog } = dataSlice.actions;

export default dataSlice.reducer;
