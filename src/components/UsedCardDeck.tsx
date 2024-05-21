import React, { useState } from 'react'

import red1 from "../cards/red 1.png"
import blue1 from "../cards/blue 1.png"
import green1 from "../cards/green 1.png"
import yellow1 from "../cards/yellow 1.png"
import plus4 from "../cards/+4.png"
import bluePlus2 from "../cards/blue +2.png"
import UsedCard from './UsedCard'
import { StaticImageData } from 'next/image'

const UsedCardDeck = () => {
    const [UsedCardDeskList, setUsedCardDeckList] = useState([red1, blue1, bluePlus2])

    const addUsedCardHandler = (card:StaticImageData) => {
        setUsedCardDeckList(prevState => [...prevState, card])
    }

    return (
        <div className='absolute top-10 flex justify-center w-2/3 h-52'>
            {UsedCardDeskList .map((item, index) => 
                <UsedCard classValue={'h-full relative'} index={index} image={item.src} key={index} />
            )}
        </div>
    )
}

export default UsedCardDeck
