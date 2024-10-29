import { UserNav } from "@/components/user-navbar";
import { Cart } from "@/components/cart";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function MenuDefault() {
  return (
    <Menubar className="flex justify-between rounded-none border-b border-none px-2 py-7 lg:px-4">
      <div className="flex">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">Música</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Sobre Música</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Preferências... <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Ocultar Música... <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Ocultar Outros... <MenubarShortcut>⇧⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarShortcut />
            <MenubarItem>
              Sair da Música <MenubarShortcut>⌘Q</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="relative">Arquivo</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Novo</MenubarSubTrigger>
              <MenubarSubContent className="w-[230px]">
                <MenubarItem>
                  Playlist <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>
                  Playlist da Seleção <MenubarShortcut>⇧⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Playlist Inteligente... <MenubarShortcut>⌥⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Pasta de Playlist</MenubarItem>
                <MenubarItem disabled>Playlist Genius</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              Abrir URL de Transmissão... <MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Fechar Janela <MenubarShortcut>⌘W</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Biblioteca</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Atualizar Biblioteca na Nuvem</MenubarItem>
                <MenubarItem>Atualizar Genius</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Organizar Biblioteca...</MenubarItem>
                <MenubarItem>Exportar Biblioteca...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Importar Playlist...</MenubarItem>
                <MenubarItem disabled>Exportar Playlist...</MenubarItem>
                <MenubarItem>Mostrar Itens Duplicados</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Obter Arte do Álbum</MenubarItem>
                <MenubarItem disabled>Obter Nomes das Faixas</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              Importar... <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Gravar Playlist no Disco...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Mostrar no Finder <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Converter</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Configuração de Página...</MenubarItem>
            <MenubarItem disabled>
              Imprimir... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Editar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>
              Desfazer <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Refazer <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>
              Recortar <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Copiar <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Colar <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Selecionar Tudo <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Desmarcar Tudo <MenubarShortcut>⇧⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Ditado Inteligente...
              <MenubarShortcut>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                  <circle cx="17" cy="7" r="5" />
                </svg>
              </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Emoji e Símbolos
              <MenubarShortcut>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Visualizar</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Mostrar Próximo a Tocar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Mostrar Letras</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset disabled>
              Mostrar Barra de Status
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Ocultar Barra Lateral</MenubarItem>
            <MenubarItem disabled inset>
              Entrar em Tela Cheia
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hidden md:block">Conta</MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarLabel inset>Trocar Conta</MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Gerenciar Família...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Adicionar Conta...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <div className="flex items-center gap-6">
        <Cart />
        <UserNav />
      </div>
    </Menubar>
  );
}
