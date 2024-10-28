"use client";
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import {
  clearPlaylists,
  fetchPlaylist,
} from "@/store/features/playlists/slice";
import { AppDispatch, RootState } from "@/store/store";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonAlbumArtwork } from "./skeleton-album-artwork";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  loading: boolean;
}

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  loading,
  className,
  ...props
}: AlbumArtworkProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  const { playlists } = useSelector(
    (state: RootState) => state.playlistsReducer,
  );

  const loadPlaylists = useMemo(() => playlists, [playlists]);

  const handleAddInPlaylist = () => {};

  return (
    <div className={cn("space-y-3", className)} {...props}>
      {loading ? (
        <SkeletonAlbumArtwork
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
          )}
        />
      ) : (
        <>
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="overflow-hidden rounded-md">
                <Image
                  src={album.cover || ""}
                  alt={album.name || ""}
                  width={width}
                  height={height}
                  draggable={false}
                  className={cn(
                    "h-auto w-auto object-cover transition-all hover:scale-105",
                    aspectRatio === "portrait"
                      ? "aspect-[3/4]"
                      : "aspect-square",
                  )}
                />
              </div>
            </ContextMenuTrigger>
            {currentUser.isLogged && (
              <ContextMenuContent className="w-40">
                <ContextMenuItem>Adicionar à Biblioteca</ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger onClick={handleAddInPlaylist}>
                    Adicionar à Playlist
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      <PlusCircledIcon className="mr-2 h-4 w-4" />
                      Nova Playlist
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    {loadPlaylists.map((playlist) => (
                      <ContextMenuItem key={playlist.id}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                        </svg>
                        {playlist.title}
                      </ContextMenuItem>
                    ))}
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>Tocar Próximo</ContextMenuItem>
                <ContextMenuItem>Tocar Depois</ContextMenuItem>
                <ContextMenuItem>Criar Estação</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Curtir</ContextMenuItem>
                <ContextMenuItem>Compartilhar</ContextMenuItem>
              </ContextMenuContent>
            )}
          </ContextMenu>

          <div className="space-y-1 text-sm">
            <h3 className="font-medium leading-none">{album.name}</h3>
            <p className="text-xs text-muted-foreground">{album.artist}</p>
          </div>
        </>
      )}
    </div>
  );
}
