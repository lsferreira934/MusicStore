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

const initialPlaylistsState: Album[] = [];

const initialState = {
  playlists: initialPlaylistsState,
};

export const fetchPlaylist = createAsyncThunk("playlist/playlists", async () => {
  const response = await fetch(`http://localhost:4000/playlist`);

  if (!response.ok) {
    throw new Error("Falha no login");
  }

  const data = await response.json();
  return data;
});

const playlistsSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    getAlbum: () => {},
    addAlbum: (state, action: PayloadAction<Album>) => {
      state.playlists = [...state.playlists, action.payload];
    },
    removeAlbum: (state, action: PayloadAction<Album>) => {
      state.playlists = state.playlists.filter(
        (album) => album.id !== action.payload.id,
      );
    },
  },
});

export const { addAlbum, removeAlbum } = playlistsSlice.actions;
export default playlistsSlice.reducer;
