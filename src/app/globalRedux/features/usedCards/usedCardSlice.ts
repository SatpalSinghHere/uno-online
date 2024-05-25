'use client'

import { card, completeDeck } from "@/utils/cardObjects"
import { createSlice } from "@reduxjs/toolkit"
import { StaticImageData } from "next/image"

export interface UsedCardsState {
    list : Array<card>
}

const initialState : UsedCardsState = {
    list : [completeDeck[9]]
}

export const usedCardSlice = createSlice({
    name : 'usedCards',
    initialState,
    reducers : {
        addUsedCard : (state, action) => {
            state.list.push(action.payload)
        },
        removeUsedCard : (state, action) => {
            state.list = state.list.filter((card) => card !== action.payload)
        }
    }
})

export const {addUsedCard, removeUsedCard} = usedCardSlice.actions;
export default usedCardSlice.reducer;