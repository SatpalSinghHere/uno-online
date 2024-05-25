'use client'

import { configureStore } from "@reduxjs/toolkit"
import usedCardSlice from "./features/usedCards/usedCardSlice"

export const store = configureStore({
    reducer: {
        usedCards: usedCardSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch