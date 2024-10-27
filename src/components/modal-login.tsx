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

import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLogin } from "@/store/features/auth/slice";
import { AppDispatch } from "@/store/store";

export function ModalLogin() {
  const [email, setEmail] = useState<string>("leandrosf934@gmail.com");
  const [password, setPassword] = useState<string>("123456789");

  const dispatch = useDispatch<AppDispatch>();

  const handlerLogin = () => {
    dispatch(fetchLogin({email, password}))
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Acesse sua conta para continuar. Preencha os campos abaixo com suas
            informações.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button type="submit" className="w-full" onClick={handlerLogin}>
            Entrar
          </Button>
        </DialogFooter>
        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Ou continue com
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
