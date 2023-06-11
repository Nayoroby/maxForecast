import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import '../home/App.scss'
import axios from "axios";
import Card from '../card/card';

const App = () => {

    const [value, setValue] = useState('')
    const [cardInfo, setCardInfo] = useState()
    
    // axios.get('http://api.weatherapi.com/v1/current.json?key=652f790bfbc14ff2a13132500230906&q=brest&aqi=no').then(resp=> console.log(resp.data))

    function get() {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=652f790bfbc14ff2a13132500230906&q=${value}&aqi=no`).then(resp=> setCardInfo(resp.data))
    }

  return (
    <>
        <Header/>
        <main className='main'>
            <div className="main__container">
                <h1 className="main__title">
                    welcome!
                </h1>
                <div className="search">
                        <input type="text" className='search__input' placeholder='find city!' value={value} onChange={(e)=> setValue(e.target.value)}/>
                        <button className='search__btn' onClick={()=> get()}>search</button>
                </div>
                <Card cardInfo={cardInfo}/>
            </div>
        </main>
        <Footer/>
    </>
  );
};

export default App;
