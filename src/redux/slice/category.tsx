import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getCategories = createAsyncThunk(
  "category/getProduct",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      const categories = data
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch issues.");
    }
  }
);


interface State {
  categories: any[]
  loading: boolean;
  error: string | null;
}
const initialState: State = {
  categories: [],
  loading: false,
  error: null,
};
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //categories
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});
export default categorySlice.reducer;


export const categorySelector = (state: { categoryStore: State }) =>
  state.categoryStore