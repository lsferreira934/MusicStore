"use client";
import {
  clearPlaylists,
  fetchPlaylist,
} from "@/store/features/playlists/slice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { useCallback, useEffect } from "react";

export default function Playlist() {
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  const { playlists } = useSelector(
    (state: RootState) => state.playlistsReducer,
  );

  const loadPlaylists = useCallback(
    () => dispatch(fetchPlaylist()),
    [dispatch],
  );

  useEffect(() => {
    if (currentUser.isLogged) {
      loadPlaylists();
    } else {
      dispatch(clearPlaylists());
    }
  }, [currentUser.isLogged, dispatch, loadPlaylists]);

  return (
    <div className="py-2">
      <h2 className="relative px-7 text-lg font-semibold tracking-tight">
        Playlists
      </h2>
      <ScrollArea className="h-[300px] px-1">
        <div className="space-y-1 p-2">
          {playlists?.map((playlist, i) => (
            <Button
              key={`${playlist.id}-${i}`}
              variant="ghost"
              className="w-full justify-start font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              {playlist.title}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
