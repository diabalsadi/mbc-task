// Redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Utils
import fetchArticles from '../../utils/fetchArticles';

// Action
export const getBlogs = createAsyncThunk(
  'getArticles',
  async () => await fetchArticles()
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    page: 1,
    isMoreData: true,
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      const newData = action.payload.slice(0, 5 * state.page);

      if (JSON.stringify(newData) === JSON.stringify(state.data))
        state.isMoreData = false;
      state.data = newData;
      state.isLoading = false;
      state.page = state.page + 1;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export default articlesSlice;
