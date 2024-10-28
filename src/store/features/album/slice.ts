import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialAlbum = {
  newAlbums: [],
  topAlbums: [],
  error: null,
  loadingNewAlbums: false,
  loadingTopAlbums: false,
};

export const fetchNewAlbums = createAsyncThunk("album/newAlbums", async () => {
  const response = await fetch(` http://localhost:4000/newAlbuns`);

  if (!response.ok) {
    throw new Error("Falha no login");
  }

  const data = await response.json();
  return data;
});

export const fetchTopAlbums = createAsyncThunk("album/topAlbums", async () => {
  const response = await fetch(` http://localhost:4000/topAlbums`);

  if (!response.ok) {
    throw new Error("Falha no login");
  }

  const data = await response.json();
  return data;
});

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNewAlbums.pending, (state) => {
        state.loadingNewAlbums = true;
        state.error = null;
      })
      .addCase(
        fetchNewAlbums.fulfilled,
        (state, action: PayloadAction<Album[]>) => {
          state.loadingNewAlbums = false;
          state.newAlbums = action.payload;
        },
      )
      .addCase(fetchNewAlbums.rejected, (state, action) => {
        state.loadingNewAlbums = false;
        state.error = action.error.message || "Erro desconhecido";
      });

    builder
      .addCase(fetchTopAlbums.pending, (state) => {
        state.loadingTopAlbums = true;
        state.error = null;
      })
      .addCase(
        fetchTopAlbums.fulfilled,
        (state, action: PayloadAction<Album[]>) => {
          state.loadingTopAlbums = false;
          state.topAlbums = action.payload;
        },
      )
      .addCase(fetchTopAlbums.rejected, (state, action) => {
        state.loadingTopAlbums = false;
        state.error = action.error.message || "Erro desconhecido";
      });
  },
});

export const {} = albumSlice.actions;
export default albumSlice.reducer;
