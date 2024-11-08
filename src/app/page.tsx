import { Metadata } from "next";
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder";

import { Button } from "@/components/ui/button";
import { WrapMenu } from "@/components/navbar/wrap-menu";
import { Sidebar } from "@/components/sidebar/sidebar";

import { WrapAlbums } from "@/components/album/wrap-albums";

export const metadata: Metadata = {
  title: "App de Música",
  description: "Exemplo de app de música usando os componentes.",
};

export default function MusicPage() {
  return (
    <>
      <div className="hidden md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Música"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Música"
          className="hidden dark:block"
        />
      </div>
      <div className="md:block">
        <WrapMenu />

        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Música
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                        <TabsTrigger value="live" disabled>
                          Ao Vivo
                        </TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircledIcon className="mr-2 h-4 w-4" />
                          Adicionar música
                        </Button>
                      </div>
                    </div>

                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <WrapAlbums />
                    </TabsContent>

                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Novos Episódios
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Seus podcasts favoritos. Atualizado diariamente.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
