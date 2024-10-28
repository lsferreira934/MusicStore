import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setUser } from "../user/slice";

interface AuthState {
  email: string;
  password: string;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  email: "",
  password: "",
  error: null,
  loading: false,
};

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, { dispatch }) => {
    const response = await fetch(
      `http://localhost:4000/users?email=${credentials.email}&password=${credentials.password}`,
    );

    if (!response.ok) {
      throw new Error("Falha no login");
    }

    const data = await response.json();

    dispatch(setUser(data));

    return data;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem(
          "user",
          JSON.stringify({
            avatar: action.payload.avatar,
            name: action.payload.name,
            email: action.payload.email,
            id: action.payload.id,
            isLogged: true,
          }),
        );
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erro desconhecido";
      });
  },
});

export const { resetError } = authSlice.actions;
export default authSlice.reducer;
