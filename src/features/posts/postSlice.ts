import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getPosts } from "./postAPI";

export type GetPosts = {
    posts: any[];
    isLoading: boolean;
    isError: boolean;
    error: string;
}

const initialState: GetPosts = {
    posts: [],
    isLoading: false,
    isError: false,
    error: ''
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async() => {
        const posts = await getPosts();
        return posts;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.isLoading = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.error = action.error?.message || 'Something went wrong';
        });
    },
});

export default postsSlice.reducer;