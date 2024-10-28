import { AlbumArtwork } from "./album-artwork";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

interface NewAlbumsProps {
  albums: Album[];
  loading: boolean;
}

export function NewAlbums({ albums, loading }: NewAlbumsProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Compre Agora
          </h2>
          <p className="text-sm text-muted-foreground">
            Principais escolhas para você. Atualizado diariamente.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {albums.map((album) => (
              <AlbumArtwork
                key={album.id}
                album={album}
                className="w-[250px]"
                aspectRatio="portrait"
                width={250}
                height={330}
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
