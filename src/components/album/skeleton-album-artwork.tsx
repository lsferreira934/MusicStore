import { Skeleton } from "../ui/skeleton";


interface SkeletonAlbumArtworkProps {
  className: string
}

export function SkeletonAlbumArtwork({className}: SkeletonAlbumArtworkProps) {
  return (
    <div className="overflow-hidden rounded-md">
      <div className="flex flex-col space-y-3">
        <Skeleton className={className} />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
