import red1 from "../cards/red 1.png"
import red2 from "../cards/red 2.png"
import red3 from "../cards/red 3.png"
import red4 from "../cards/red 4.png"
import red5 from "../cards/red 5.png"
import red6 from "../cards/red 6.png"
// import red7 from "../cards/red 7.png"
import red8 from "../cards/red 8.png"
import red9 from "../cards/red 9.png"
// import red10 from "../cards/red 10.png"
import redPlus2 from "../cards/red +2.png"

import blue1 from "../cards/blue 1.png"
import blue2 from "../cards/blue 2.png"
import blue3 from "../cards/blue 3.png"
import blue4 from "../cards/blue 4.png"
import blue5 from "../cards/blue 5.png"
import blue6 from "../cards/blue 6.png"
import blue7 from "../cards/blue 7.png"
import blue8 from "../cards/blue 8.png"
import blue9 from "../cards/blue 9.png"
// import blue10 from "../cards/blue 10.png"
import bluePlus2 from "../cards/blue +2.png"

import green1 from "../cards/green 1.png"
import yellow1 from "../cards/yellow 1.png"
import plus4 from "../cards/+4.png"

import { StaticImageData } from 'next/image'

export interface card {
    value: number,
    color: string,
    image: StaticImageData
}

const red_1 : card = {
    value: 1,
    color: "red",
    image: red1,
}
const red_2 : card = {
    value: 2,
    color: "red",
    image: red2,
}
const red_3 : card = {
    value: 3,
    color: "red",
    image: red3,
}
const red_4 : card = {
    value: 4,
    color: "red",
    image: red4,
}
const red_5 : card = {
    value: 5,
    color: "red",
    image: red5,
}
const red_6 : card = {
    value: 6,
    color: "red",
    image: red6,
}
// const red_7 : card = {
//     value: 7,
//     color: "red",
//     image: red7,
// }
const red_8 : card = {
    value: 8,
    color: "red",
    image: red8,
}
const red_9 : card = {
    value: 9,
    color: "red",
    image: red9,
}
// const red_10 : card = {
//     value: 10,
//     color: "red",
//     image: red10,
// }
const red_plus2 : card = {
    value: 11,
    color: "red",
    image: redPlus2,
}
const blue_1 : card = {
    value: 1,
    color: "blue",
    image: blue1,
}
const blue_2 : card = {
    value: 2,
    color: "blue",
    image: blue2,
}
const blue_3 : card = {
    value: 3,
    color: "blue",
    image: blue3,
}
const blue_4 : card = {
    value: 4,
    color: "blue",
    image: blue4,
}
const blue_5 : card = {
    value: 5,
    color: "blue",
    image: blue5,
}
const blue_6 : card = {
    value: 6,
    color: "blue",
    image: blue6,
}
const blue_7 : card = {
    value: 7,
    color: "blue",
    image: blue7,
}
const blue_8 : card = {
    value: 8,
    color: "blue",
    image: blue8,
}
const blue_9 : card = {
    value: 9,
    color: "blue",
    image: blue9,
}
// const blue_10 : card = {
//     value: 10,
//     color: "blue",
//     image: blue10,
// }
const blue_plus2 : card = {
    value: 11,
    color: "blue",
    image: bluePlus2,
}

export const completeDeck : Array<card> = [
    red_1,
    red_2,
    red_3,
    red_4,
    red_5,
    red_6,
    // red_7,
    red_8,
    red_9,
    // red_10,
    red_plus2,

    blue_1,
    blue_2,
    blue_3,
    blue_4,
    blue_5,
    blue_6,
    blue_7,
    blue_8,
    blue_9,
    // blue_10,
    blue_plus2,

]


