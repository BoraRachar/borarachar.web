import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface AuthSlice {
  rememberUser: boolean;
  email: string;
}

const initialState: AuthSlice = {
  rememberUser: false,
  email: "",
};

const authSlice: Slice<AuthSlice> = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRememberUser: (state, action: PayloadAction<boolean>) => {
      state.rememberUser = action.payload;
    },

    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      localStorage.setItem("userEmail", action.payload);
    },
  },
});

export const { setRememberUser, setEmail } = authSlice.actions;
export default authSlice.reducer;
