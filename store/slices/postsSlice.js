import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const fetchPosts = createAsyncThunk("posts/fetch", async (req, res) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );

  const data = await response.json();
  return data;
});

const initialState = {
  postList: [],
  fetchingPosts: true,
  errorMessage: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return (state = {
        ...state,
        ...action.payload.posts,
      });
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.fetchingPosts = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.postList = action.payload;
      state.fetchingPosts = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.fetchingPosts = false;
      state.errorMessage = `${action.error.message} this link:"${action.type}"`;
    });
  },
});
export const selectPosts = (state) => state.posts.postList;
export default postSlice.reducer;
