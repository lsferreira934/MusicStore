import { AlbumArtwork } from "./album-artwork";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

interface TopAlbumsProps {
  albums: Album[];
  loading: boolean;
}

export function TopAlbums({ albums, loading }: TopAlbumsProps) {
  return (
    <>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          Feito para Você
        </h2>
        <p className="text-sm text-muted-foreground">
          Suas playlists pessoais. Atualizado diariamente.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {albums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[150px]"
                aspectRatio="square"
                width={150}
                height={150}
                loading={loading}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
