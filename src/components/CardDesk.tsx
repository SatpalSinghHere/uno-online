'use client'
import React, { useState } from 'react'

import red1 from "../cards/red 1.png"
import blue1 from "../cards/blue 1.png"
import green1 from "../cards/green 1.png"
import yellow1 from "../cards/yellow 1.png"
import plus4 from "../cards/+4.png"
import bluePlus2 from "../cards/blue +2.png"
import Card from './Card'
import { StaticImageData } from 'next/image'

const CardDesk = () => {
    
    const [cardList, setCardList] = useState([red1, blue1, green1, yellow1, plus4, bluePlus2])
    const midIndex = (cardList.length / 2) 

    const removeCardHandler = (card:StaticImageData) => {
        const newCardList = cardList.filter((item)=> {
            return item !== card
        })
        setCardList(newCardList)
        console.log(card, newCardList);
    }

    return (
        <div className='cardDesk h-52 flex w-full relative justify-center'>
            {cardList.map((item, index) =>                
                <Card setCardList={setCardList} cardList={cardList} classValue={'h-full'} image={item} index={index} midIndex={midIndex} key={index} />
            )}
        </div>
    )
}

export default CardDesk
