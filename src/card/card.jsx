import axios from 'axios';
import React from 'react';
import '../card/card.scss'

const card = (cardInfo) => {
   
    if (cardInfo.cardInfo) {
        console.log(cardInfo);
        console.log(cardInfo.cardInfo.location.name);
        return (
            <div className={cardInfo.cardInfo? 'card' : 'none'}>
                <div className="card__content">
                    <h3 className="card__title">{cardInfo.cardInfo.location.name} | {cardInfo.cardInfo.location.country}</h3>
                    <div className="main__info">
                        <div className="temperature">
                            <p className="temperature__text">{cardInfo.cardInfo.current.temp_c}°C</p>
                            <img className="temperature__img" src='../../public/temp.svg'/>
                        </div>      
                        <div className="state">
                            <p className="state__text">{cardInfo.cardInfo.current.condition.text}</p>
                            <img src={cardInfo.cardInfo.current.condition.icon} alt="" className="state__img" />
                        </div>
                    </div>  
                    <div className="second__info">
                        <p className="feels-like">feels like: {cardInfo.cardInfo.current.feelslike_c}°C</p>
                        <p className="humidity">humidity: {cardInfo.cardInfo.current.humidity}</p>
                        <p className="pressure">pressure: {cardInfo.cardInfo.current.pressure_in}</p>
                        <p className="precip">precip: {cardInfo.cardInfo.current.precip_mm}mm</p>
                    </div>
                    <div className="last-update">
                        <p className="last-update__text">last update:</p>
                        <p className="last-update__value">{cardInfo.cardInfo.current.last_updated}</p>
                    </div>
                </div>
            </div>
        );
    }

  
};

export default card;