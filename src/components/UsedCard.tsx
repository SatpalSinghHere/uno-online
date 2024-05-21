import React from 'react'
import {motion} from 'framer-motion'
import { randomInt } from 'crypto'

const UsedCard = ({ classValue, index, image }: { classValue: string, index: number, image:string }) => {
    
    return (
        <div>
            <motion.img 
            layoutId='card'           
            className={classValue}
            src={image} alt="card"
            key={index}
            style={{
                position: 'absolute',
                transform: `translateX(calc(${-10}vw ))`
                
            }}
        />
        </div>
    )
}

export default UsedCard
