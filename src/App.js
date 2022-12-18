import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Banner from './components/Banner';
import ShopItem from './components/ShopItem';
import { useEffect, useState } from 'react';

function App() {

  const [dailyShop, setDailyShop] = useState([])
  const [date, setDate] = useState('')

  useEffect(() => 
  async function getShopItems(){
    const response = await fetch('https://fortnite-api.com/v2/shop/br')
    const shopData = await response.json();
    let daily = shopData.data.daily.entries;
    setDate(shopData.data.date);
    setDailyShop(daily);
  },[])

  
  return (
    <div className="App">
      <header className='header'>
      <Banner date={date}/>
      <button className="shopping-cart-button">Cart</button>
      </header>
      <div className="main-display">
      {dailyShop.map((entry, index) => (
          <ShopItem key={index}
          itemName={entry.items[0].name}
          itemRarity={entry.items[0].rarity.value}
          itemDescription={entry.items[0].description}
          itemPrice={entry.finalPrice}
          itemPicture={entry.items[0].images.featured}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
