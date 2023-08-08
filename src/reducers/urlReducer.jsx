import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urls: [],
};

const urlSlice = createSlice({
  name: "urls",
  initialState,
  reducers: {
    addShortenedUrl: (state, action) => {
      const { id, longUrl, shortUrl, flag } = action.payload;
      const existingIndex = state.urls.findIndex((url) =>
        flag ? url.longUrl === longUrl : url.id === id
      );

      if (existingIndex !== -1) {
        // If the object already exists, update its properties
        state.urls[existingIndex] = { id, longUrl, shortUrl };
      } else {
        // If the object doesn't exist, add it to the array
        state.urls.push({ id, longUrl, shortUrl });
      }
    },
    deleteShortenedUrl: (state, action) => {
      const idToDelete = action.payload;

      state.urls = state.urls.filter((url) => url.id !== idToDelete);
    },
  },
});

export const { addShortenedUrl, deleteShortenedUrl } = urlSlice.actions;
export default urlSlice.reducer;
