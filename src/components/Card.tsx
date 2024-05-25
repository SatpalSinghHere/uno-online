"use client"

import React, { useEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { useDispatch } from 'react-redux'
import { addUsedCard } from '@/app/globalRedux/features/usedCards/usedCardSlice'
import { card } from '@/utils/cardObjects'


const Card = ({ 
    cardOnTop,
    removeCardHandler,
    // cardName, 
    isUsed,
    canBeUsed, 
    classValue, 
    cardObject, 
    index, 
    midIndex,
    changeFactor }:
    { 
        cardOnTop: card,
        removeCardHandler: Function,
        // cardName: string, 
        isUsed: boolean, 
        canBeUsed: boolean, 
        classValue: string, 
        cardObject: card , 
        index: number, 
        midIndex: number,
        changeFactor: number, 
    }) => {

    // const addUsedCardHandler = (image: StaticImageData) => {
    //     setDeckValue((prev: Array<StaticImageData>) => [...prev, image])
    // }

    // const removeCardHandler = (cardObject: card) => {
    //     const newDeckValue = deckValue.filter((item) => {
    //         return item !== cardObject
    //     })
    //     setDeckValue(newDeckValue)
    //     console.log(cardObject, newDeckValue);
    // }

    // const [canBeUsed, setCanBeUsed] = useState(false)

    // // if (canBeUsed == false && (cardOnTop.value == cardObject.value || cardOnTop.color == cardObject.color)){
    // //     setCanBeUsed(true)
    // // }

    const dispatch = useDispatch();

    const useCard = () => {
        removeCardHandler(cardObject)
        dispatch(addUsedCard(cardObject))
    }
    // console.log(cardObject)
    return (

        <motion.img
            layoutId={cardObject.image.src}
            layout="position"
            className={classValue}
            src={cardObject.image.src} alt="card"
            key={changeFactor}
            initial={
                isUsed ? {
                    rotate: (Math.random() - 0.5)*100 
                }:{
                    ...canBeUsed ? {
                        x: (index - midIndex) * 50,
                        y: -20
                    }:{
                        x: (index - midIndex) * 50,
                    }
                        // x: (index - midIndex) * 30,
                        // y: Math.abs(index - midIndex) * 5,
                        // rotate: (index - midIndex) * 4,
                    
                }
            }
            whileHover={
                isUsed ? {} : {
                    scale: 1.1,
                    y: -50,
                    zIndex: 100,
                }
            }
            transition={{
                delay: 0.1,
                
            }}
            onClick={() => {
                if (!isUsed && canBeUsed) { useCard() }
            }}
        />

    )
}

export default Card
