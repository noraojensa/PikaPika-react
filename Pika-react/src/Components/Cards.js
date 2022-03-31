import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Can you name them all?</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="Gen1/1.png" 
                    text=""
                    label="Adventure"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards