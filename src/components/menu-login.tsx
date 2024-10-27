import { Menubar } from "@/components/ui/menubar";
import { ModalLogin } from "./modal-login";
import { ModalCreateAccount } from "./modal-create-account";

export function MenuLogin() {
  return (
    <Menubar className="flex justify-end gap-2 rounded-none border-b border-none px-2 py-7 lg:px-4">
      <ModalLogin />
      <ModalCreateAccount />
    </Menubar>
  );
}
