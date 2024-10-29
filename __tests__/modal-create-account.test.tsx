import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ModalCreateAccount } from "@/components/navbar/modal/modal-create-account";
import StoreProvider from "@/app/StoreProvider";

describe("ModalCreateAccount", () => {
  beforeEach(() => {
    render(
      <StoreProvider>
        <ModalCreateAccount />
      </StoreProvider>,
    );
  });

  test("deve renderizar o botão de Criar conta", () => {
    const button = screen.getByRole("button", { name: /Criar conta/i });
    expect(button).toBeInTheDocument();
  });

  test("deve abrir o modal quando o botão e clicado", () => {
    const button = screen.getByRole("button", { name: /Criar conta/i });
    fireEvent.click(button);

    const modalTitle = screen.getByRole("heading", { name: /Criar conta/i });
    expect(modalTitle).toBeInTheDocument();
  });

  test("deve mostrar os campos de nome, email e senha no modal", () => {
    const button = screen.getByRole("button", { name: /Criar conta/i });
    fireEvent.click(button);

    const nameInput = screen.getByLabelText(/Nome/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Senha/i);

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
