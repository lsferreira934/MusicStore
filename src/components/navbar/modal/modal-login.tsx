"use cliente";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "@/store/features/auth/slice";
import { AppDispatch, RootState } from "@/store/store";


export function ModalLogin() {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("leandrosf934@gmail.com");
  const [password, setPassword] = useState<string>("123456789");

  const { loading } = useSelector((state: RootState) => state.authReducer);

  const dispatch = useDispatch<AppDispatch>();

  const handlerLogin = () => {
    dispatch(fetchLogin({ email, password }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setOpen(true)}>
          Login
        </Button>
      </DialogTrigger>
      <DialogContent
        className="md:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
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
            disabled={loading}
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
            disabled={loading}
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button
            disabled={loading}
            type="submit"
            className="w-full"
            onClick={handlerLogin}
          >
            {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
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
          <Button disabled={loading} variant="outline">
            {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Github
          </Button>
          <Button disabled={loading} variant="outline">
            {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
