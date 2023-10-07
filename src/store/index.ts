import AuthSlice from '@/features/AuthSlice'
import { configureStore } from '@reduxjs/toolkit'
import emailReducer from './emailSlice';


export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    email: emailReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch