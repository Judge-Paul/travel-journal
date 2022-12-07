import React from 'react'
import Card from './Card'
import Data from './data.js'

export default function Cards() {
    const card = Data.map( function(Data) {
        return (
            <Card
            key={Data.id}
            item={Data}
            />
        )
    })
    return (
        <div>
            {card}
        </div>
    )
}