import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currentUser: CurrentUser = {
  name: null,
  avatar: null,
  email: null,
  isLogged: false,
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
        state.currentUser = { ...JSON.parse(user), isLogged: true };
        return;
      }
      state.currentUser = action.payload;
      state.currentUser.isLogged = true;
    },
    clearUser: (state) => {
      localStorage.setItem("user", "");
      state.currentUser = initialState.currentUser;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
