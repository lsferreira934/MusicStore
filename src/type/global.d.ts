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

interface InitialAlbum {
  newAlbums: Album[];
  topAlbums: Album[];
  error: string | null;
  loadingNewAlbums: boolean;
  loadingTopAlbums: boolean;
}

interface InitialPlaylist {
  playlists: Playlist[];
  error: string | null;
  loading: boolean;
}

interface CurrentUser {
  name: string | null;
  email: string | null;
  avatar: string | null;
  isLogged: boolean;
}
