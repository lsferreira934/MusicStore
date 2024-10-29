import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MenuLogin } from "@/components/navbar/menu-login";
import StoreProvider from "@/app/StoreProvider";

describe("ModalLogin", () => {
  beforeEach(() => {
    render(
      <StoreProvider>
        <MenuLogin />
      </StoreProvider>,
    );
  });

  test("deve renderizar o botão de login", () => {
    const button = screen.getByRole("button", { name: /login/i });
    expect(button).toBeInTheDocument();
  });

  test("deve abrir o modal quando o botão e clicado", () => {
    const button = screen.getByRole("button", { name: /login/i });
    fireEvent.click(button);

    const modalTitle = screen.getByRole("heading", { name: /login/i });
    expect(modalTitle).toBeInTheDocument();
  });

  test("deve mostrar os campos de email e senha no modal", () => {
    const button = screen.getByRole("button", { name: /login/i });
    fireEvent.click(button);

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Senha/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
