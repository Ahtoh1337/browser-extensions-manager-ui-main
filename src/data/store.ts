import { configureStore } from "@reduxjs/toolkit"
import { extensionsSlice } from "./extensionsSlice"
import { themeSlice } from "./themeSlice"


export const store = configureStore({
    reducer: {
        extensions: extensionsSlice.reducer,
        theme: themeSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store