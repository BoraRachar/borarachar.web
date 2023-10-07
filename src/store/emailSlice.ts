import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmailState {
  email: string | null;
}

const initialState: EmailState = {
  email: null,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = emailSlice.actions;

export const getEmail = createSelector(
  (state: { email: EmailState }) => state.email,
  (email) => email
);

export default emailSlice.reducer;