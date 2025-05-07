import { createSlice } from "@reduxjs/toolkit"

type Theme = {
    isDark: boolean
}

const initialTheme: Theme = {
    isDark: false
}

export const themeSlice = createSlice({
    name: "theme",
    initialState: initialTheme,
    reducers: {
        toggleTheme: state => {
            state.isDark = !state.isDark;
        }
    }
})

export const { toggleTheme } = themeSlice.actions;