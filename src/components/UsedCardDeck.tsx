import React from 'react'


import Card from './Card'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/globalRedux/store'

const UsedCardDeck = () => {
    // const [usedCardDeskList, setUsedCardDeckList] = useState([red1, blue1, bluePlus2])

    // const addUsedCardHandler = (card:StaticImageData) => {
    //     setUsedCardDeckList(prevState => [...prevState, card])
    // }

    const usedCardList = useSelector((state: RootState) => state.usedCards.list)
    // const cardOnTop = usedCardList[-1]
    

    return (
        <div className='relative top-10 flex justify-center w-2/3 h-52'>
            {usedCardList .map((item, index) => 
                <Card 
                cardOnTop={usedCardList.at(-1)}
                // cardName={Object.keys(item)[0]}
                cardObject={item}
                isUsed={true}
                canBeUsed={false}
                removeCardHandler={null}
                classValue={'h-full absolute'} 
                index={index}
                midIndex={0} 
                key={index} />
            )}
        </div>
    )
}

export default UsedCardDeck
