"use client"

import React, { useEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { StaticImageData } from 'next/image'


const Card = ({setCardList, cardList, classValue, image, index, midIndex }: {setCardList: Function, cardList: Array<StaticImageData>, classValue: string, image: StaticImageData, index: number, midIndex: number }) => {

    // const [cardUsed, setCardUsed] = useState(false)

    // const [scope, animate] = useAnimate()
    // useEffect(() => {
    //     if (cardUsed == true) {
    //         animate(scope.current, {
    //             y: "-50vh"
    //         })
    //     }
    // }, [cardUsed])

    const removeCardHandler = (card:StaticImageData) => {
        const newCardList = cardList.filter((item)=> {
            return item !== card
        })
        setCardList(newCardList)
        console.log(card, newCardList);
    }

    const useCard = () => {
        removeCardHandler(image)
    }

    return (

        <motion.img
            
            // ref={scope}
            className={classValue}
            src={image.src} alt="card"
            key={index}
            initial={{
                // x: (index - midIndex) * 50,
            }}
            whileHover={{
                scale: 1.1,
                y: -50,
                zIndex: 100,
            }}

            transition={{
                delay: 0.1
            }}
            onClick={()=>{useCard()}}
        />

    )
}

export default Card
