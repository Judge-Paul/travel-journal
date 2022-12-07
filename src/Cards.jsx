import React from 'react'
import Card from './Card'
import Data from './data.js'

export default function Cards() {
    return (
        <div className= "cards">
            <Card
            country="JAPAN"
            title="Mount Fuji"
            startDate="12 Jan, 2021"
            endDate="24 Jan, 2021"
            description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            />
        </div>
    )
}