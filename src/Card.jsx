import React from 'react'

export default function Card() {
    return (
        <div className="container card-element">
            <div className="row">
                <div className="col-lg-3">
                    <img src="https://source.unsplash.com/WLxQvbMyfas" />
                </div>
                <div className="col-lg-9">
                    <div className='pt-4 pb-2'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.963"
                    height="20.963"
                    x=""
                    y="0"
                    enableBackground="new 0 0 425.963 425.963"
                    version="1.1"
                    viewBox="0 0 425.963 425.963"
                    xmlSpace="preserve"
                    fill="currentColor"
                    stroke= "currentColor"
                    >
                        <path d="M213.285 0h-.608C139.114 0 79.268 59.826 79.268 133.361c0 48.202 21.952 111.817 65.246 189.081 32.098 57.281 64.646 101.152 64.972 101.588a4.8 4.8 0 003.847 1.934c.043 0 .087 0 .13-.002a4.805 4.805 0 003.868-2.143c.321-.486 32.637-49.287 64.517-108.976 43.03-80.563 64.848-141.624 64.848-181.482C346.693 59.825 286.846 0 213.285 0zm61.58 136.62c0 34.124-27.761 61.884-61.885 61.884-34.123 0-61.884-27.761-61.884-61.884s27.761-61.884 61.884-61.884c34.124 0 61.885 27.761 61.885 61.884z"></path>
                    </svg>
                        <span className="card--country pl-2">JAPAN</span>
                        <span className="pl-4">
                            <a href="#" className="card--maplink" >View on Google Maps</a>
                        </span>
                    </div>
                    <div className="card--title mb-4">
                        Mount Fuji
                    </div>
                    <div className="card--date mt-3 mb-3">
                        <span>12 Jan, 2021</span> - <span>24 Jan, 2021</span>
                    </div>
                    <div className="card--description">
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </div>
                </div>
            </div>
        </div>
    )
}