import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const product = data?.products
      return product;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch issues.");
    }
  }
);


export const getCategoryWiseProduct = createAsyncThunk(
  "product/getCategoryWiseProduct",
  async (payload: any, thunkAPI) => {
    try {
      const response = await fetch("https://dummyjson.com/products/category/" + payload);
      const data = await response.json();
      const product = data?.products
      return product;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch issues.");
    }
  }
);



export const getSearchProduct = createAsyncThunk(
  "product/getSearchProduct",
  async (payload: any, thunkAPI) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${payload}`);
      const data = await response.json();
      const product = data?.products
      return product;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch issues.");
    }
  }
);

interface State {
  product: any[];
  loading: boolean;
  error: string | null;
}
const initialState: State = {
  product: [],
  loading: false,
  error: null,
};
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      //getCategoryWiseProduct
      .addCase(getCategoryWiseProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryWiseProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getCategoryWiseProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      //getSearchProduct
      .addCase(getSearchProduct.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getSearchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getSearchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
  },
});
export default productSlice.reducer;


export const productSelector = (state: { productStore: State }) =>
  state.productStore