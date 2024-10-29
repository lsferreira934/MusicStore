import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function ModalCreateAccount() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Criar Conta</Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar Conta</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para criar sua conta.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" placeholder="Seu nome completo" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="seuemail@exemplo.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="Digite sua senha" />
        </div>

        <DialogFooter>
          <Button type="submit" className="w-full">
            Criar Conta
          </Button>
        </DialogFooter>

        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Ou entre com
            </span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-6">
          <Button variant="outline">Github</Button>
          <Button variant="outline">Google</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
