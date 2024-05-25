'use client'
import React, { useEffect, useState } from 'react'

import red1 from "../cards/red 1.png"
import blue1 from "../cards/blue 1.png"
import green1 from "../cards/green 1.png"
import yellow1 from "../cards/yellow 1.png"
import plus4 from "../cards/+4.png"
import bluePlus2 from "../cards/blue +2.png"
import Card from './Card'
import { StaticImageData } from 'next/image'
import { card, completeDeck } from '@/utils/cardObjects'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/globalRedux/store'

const CardDesk = () => {
    
    const [cardList, setCardList] = useState(completeDeck)
    const [midIndex, setMidIndex] = useState(Math.floor(cardList.length/2))
    
    useEffect(()=>{
        setMidIndex(Math.floor(cardList.length/2))
    })
    // const midIndex = (cardList.length / 2) 

    const removeCardHandler = (cardObject: card) => {
        const newDeckValue = cardList.filter((item) => {
            return item !== cardObject
        })
        setCardList([...newDeckValue])
        // console.log(newDeckValue);
    }
    console.log(midIndex)

    const usedCardList = useSelector((state: RootState) => state.usedCards.list)
    // const cardOnTop = usedCardList[-1]
    const cardOnTop = usedCardList.at(-1)

    // useEffect(()=>{
    //     console.log("render")
    // },[cardList])

    return (
        <div className='cardDesk h-36 flex w-full relative justify-center'>
            {cardList.map((item, index) =>                
                <Card 
                // cardName={Object.keys(item)[0]}
                cardOnTop={usedCardList.at(-1)}
                isUsed={false} 
                canBeUsed={
                    (cardOnTop.value == item.value || cardOnTop.color == item.color) ? true : false
                }
                removeCardHandler={removeCardHandler}
                classValue={'h-full absolute'} 
                cardObject = {item} 
                index={index} 
                midIndex={midIndex} 
                key={index} 
                changeFactor={cardList.length}
                />
            )}
        </div>
    )
}

export default CardDesk
