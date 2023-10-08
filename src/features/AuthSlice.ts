import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface AuthSlice {
  rememberUser: boolean;
  email: string;
  url: string;
}

const initialState: AuthSlice = {
  rememberUser: false,
  email: "",
  url: "",
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

    setUrl: (state, action: PayloadAction<string>) => {
      localStorage.setItem("url", action.payload);
    },
  },
});

export const { setRememberUser, setEmail, setUrl } = authSlice.actions;
export default authSlice.reducer;
