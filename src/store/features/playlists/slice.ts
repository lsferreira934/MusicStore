import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  id: string | null;
  title: string | null;
  duration: string | null;
}

interface Album {
  id: string | null;
  name: string | null;
  artist: string | null;
  cover: string | null;
  songs: Song[];
}

interface Playlist {
  id: string | null;
  title: string | null;
  albums: Album[];
}

interface InitialPlaylist {
  playlists: Playlist[];
  error: string | null;
  loading: boolean;
}

const initialState: InitialPlaylist = {
  playlists: [],
  error: null,
  loading: false,
};

export const fetchPlaylist = createAsyncThunk(
  "playlist/playlists",
  async () => {
    const response = await fetch(`http://localhost:4000/playlist`);

    if (!response.ok) {
      throw new Error("Falha no login");
    }

    const data = await response.json();
    return data;
  },
);

const playlistsSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    getPlaylist: () => {},
    addPlaylist: (state, action: PayloadAction<Playlist>) => {
      state.playlists = [...state.playlists, action.payload];
    },
    removePlaylist: (state, action: PayloadAction<Playlist>) => {
      state.playlists = state.playlists.filter(
        (playlist) => playlist.id !== action.payload.id,
      );
    },
    clearPlaylists: (state) => {
      state.playlists = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPlaylist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPlaylist.fulfilled,
        (state, action: PayloadAction<Playlist[]>) => {
          state.loading = false;
          state.playlists = action.payload;
        },
      )
      .addCase(fetchPlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erro desconhecido";
      });
  },
});

export const { addPlaylist, getPlaylist, removePlaylist, clearPlaylists } =
  playlistsSlice.actions;
export default playlistsSlice.reducer;
