import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentUser {
  name: string | null;
  email: string | null;
  avatar: string | null;
}

const currentUser: CurrentUser = {
  name: null,
  avatar: null,
  email: null,
};

const initialState = {
  currentUser: currentUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<CurrentUser>) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.currentUser = JSON.parse(user);
        return;
      }
      state.currentUser = action.payload;
    },
    clearUser: (state) => {
      localStorage.setItem("user", "");
      state.currentUser = initialState.currentUser;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
