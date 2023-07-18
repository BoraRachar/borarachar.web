import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface AuthSlice {
   rememberUser: boolean;
}

const initialState: AuthSlice = {
   rememberUser: false,
};

const authSlice: Slice<AuthSlice> = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setRememberUser: (state, action: PayloadAction<boolean>) => {
         state.rememberUser = action.payload;
      },
   },
});

export const { setRememberUser } = authSlice.actions;
export default authSlice.reducer;