import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk('data/getData', async (path) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        };
        const response = await fetch(path, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        throw error;
    }
});

const initialState = {
    news: null,
    products: null,
    error: null,
    sushi:null,
    set:null,
    roll:null,
    sneaks:null,
    souses:null,
    drink:null,
    dishes:null,
};

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        filterIngredient(state, action) {
            const ingredient = action.payload.toLowerCase();
    
            if (state.sushi == null) {
                state.sushi = state.sushi.filter(product =>
                    product?.incredients?.some(ing => ing.toLowerCase().includes(ingredient))
                );
            } else {
                state.sushi = null;  
                state.sushi = state.products.filter(item => item.category.toLowerCase() === "sushi");
                state.sushi = state.sushi.filter(product =>
                    product?.incredients?.some(ing => ing.toLowerCase().includes(ingredient))
                );
            }
        
            if (state.roll == null) {
                state.roll = state.roll.filter(product =>
                    product?.incredients?.some(ing => ing.toLowerCase().includes(ingredient))
                );
            } else {
                state.roll = null;  
                state.roll = state.products.filter(item => item.category.toLowerCase() === "roll");
                state.roll = state.roll.filter(product =>
                    product?.incredients?.some(ing => ing.toLowerCase().includes(ingredient))
                );  
            }
        
            if (state.set == null) {
                state.set = state.set.filter(product =>
                    product?.incredients?.some(ing => ing.toLowerCase().includes(ingredient))
                );
            } else {
                state.set = null;  
                state.set = state.products.filter(item => item.category.toLowerCase() === "set");
                state.set = state.set.filter(product =>
                    product?.incredients?.some(ing => ing.toLowerCase().includes(ingredient))
                );
            }
        
            if (state.sneaks == null) {
                state.sneaks = state.sneaks.filter(product =>
                    product?.incredients?.some(ing => ing.toLowerCase().includes(ingredient))
                );
            } else {
                state.sneaks = null;  
                state.sneaks = state.products.filter(item => item.category.toLowerCase() === "sneaks");
                state.sneaks = state.sneaks.filter(product =>
                    product?.incredients?.some(ing => ing.toLowerCase().includes(ingredient))
                );
            }
        },
        filterCatalog(state, action) {
            const ctgry = action.payload.toLowerCase();
        
            if (state.sushi == null) {
                state.sushi = state.sushi.filter(product =>
                    product?.catalog?.some(ing => ing.toLowerCase().includes(ctgry))
                );
            } else {
                state.sushi = null;  
                state.sushi = state.products.filter(item => item.category.toLowerCase() === "sushi");
                state.sushi = state.sushi.filter(product =>
                    product?.catalog?.some(ing => ing.toLowerCase().includes(ctgry))
                );
            }
        
            if (state.roll == null) {
                state.roll = state.roll.filter(product =>
                    product?.catalog?.some(ing => ing.toLowerCase().includes(ctgry))
                );
            } else {
                state.roll = null;  
                state.roll = state.products.filter(item => item.category.toLowerCase() === "roll");
                state.roll = state.roll.filter(product =>
                    product?.catalog?.some(ing => ing.toLowerCase().includes(ctgry))
                );  
            }
        
            if (state.set == null) {
                state.set = state.set.filter(product =>
                    product?.catalog?.some(ing => ing.toLowerCase().includes(ctgry))
                );
            } else {
                state.set = null;  
                state.set = state.products.filter(item => item.category.toLowerCase() === "set");
                state.set = state.set.filter(product =>
                    product?.catalog?.some(ing => ing.toLowerCase().includes(ctgry))
                );
            }
        
            if (state.sneaks == null) {
                state.sneaks = state.sneaks.filter(product =>
                    product?.catalog?.some(ing => ing.toLowerCase().includes(ctgry))
                );
            } else {
                state.sneaks = null;  
                state.sneaks = state.products.filter(item => item.category.toLowerCase() === "sneaks");
                state.sneaks = state.sneaks.filter(product =>
                    product?.catalog?.some(ing => ing.toLowerCase().includes(ctgry))
                );
            }
        },
        
        resetFilter(state) {
            state.sushi = null
            state.roll = null
            state.sneaks = null
            state.set = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, action) => {
                state.news = action.payload.news;
                state.products = action.payload.products
                state.sushi = action.payload.products.filter(item => item.category.toLowerCase() === "sushi");
                state.set = action.payload.products.filter(item => item.category.toLowerCase() === "set");
                state.roll = action.payload.products.filter(item => item.category.toLowerCase() === "roll");
                state.sneaks = action.payload.products.filter(item => item.category.toLowerCase() === "sneaks");
                state.souses = action.payload.products.filter(item => item.category.toLowerCase() === "souses");
                state.drink = action.payload.products.filter(item => item.category.toLowerCase() === "drink");
                state.dishes = action.payload.products.filter(item => item.category.toLowerCase() === "dishes");
                state.sushi = action.payload.products.filter(item => item.category.toLowerCase() === "sushi");
            })
            .addCase(getData.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
});

export const { filterIngredient, resetFilter,filterCatalog } = dataSlice.actions;

export default dataSlice.reducer;
