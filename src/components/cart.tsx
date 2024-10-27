import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <svg
            viewBox="0 0 30 30"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m28.76 11.35a1 1 0 0 0 -.76-.35h-6v-4a3 3 0 0 0 -3-3h-6a3 3 0 0 0 -3 3v4h-6a1 1 0 0 0 -1 1.15l1.88 12.15a2 2 0 0 0 2 1.7h18.26a2 2 0 0 0 2-1.7l1.86-12.15a1 1 0 0 0 -.24-.8zm-16.76-4.35a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4h-8zm13.14 17h-18.28l-1.69-11h21.66z" />
            <path d="m0 0h32v32h-32z" fill="none" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Seu carrinho</SheetTitle>
          <SheetDescription>
            Fique a vontade para adicionar mais produtos
          </SheetDescription>
        </SheetHeader>
        <div className="grid h-auto gap-4 py-4"></div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="w-full" type="submit">
              Finalizar a compra
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
