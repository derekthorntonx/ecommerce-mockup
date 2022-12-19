import './App.css';
import ShoppingCart from './assets/shopping-cart.png';
import Banner from './components/Banner';
import ShopItem from './components/ShopItem';
import CheckoutItem from './components/CheckoutItem';
import { useEffect, useState } from 'react';

function App() {

  const [dailyShop, setDailyShop] = useState([]);
  const [date, setDate] = useState('')
  const [cartItems, setCartItems] = useState([]);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  

  useEffect(() => // fetch json from API on initial render
  async function getShopItems(){
    const response = await fetch('https://fortnite-api.com/v2/shop/br')
    const shopData = await response.json();
    let daily = shopData.data.daily.entries;
    setDate(shopData.data.date);
    setDailyShop(daily);
  }
  ,[])

  function handlePrice() {
    let sum = 0;
    cartItems.forEach(item => {
      sum += item.price;
    })
    setTotalPrice(sum);
  }
  
  return (
    <div className="App">
      <header className='header'>
      <Banner date={date}/>
      <button className="shopping-cart-button" onClick={() => {setShowCheckOut(true); handlePrice()}}>
        <img src={ShoppingCart} alt='Check-out Cart'/>
        <span>{cartItems.length}</span>
        </button>
      </header>
      <div className="main-display">
      {dailyShop.map((entry, index) => (
          <ShopItem key={index}
          itemName={entry.items[0].name}
          itemRarity={entry.items[0].rarity.value}
          itemDescription={entry.items[0].description}
          itemPrice={entry.finalPrice}
          itemPicture={entry.items[0].images.featured}
          cartItems={cartItems}
          setCartItems={setCartItems}
          />
        ))}
      </div>
      <div className={(showCheckOut ? 'checkout-display' : 'hidden')}>
        <div className='checkout-list'>
        {cartItems.map((item, index) => (
          <CheckoutItem key={index} item={item} index={index} setCartItems={setCartItems} cartItems={cartItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
        ))}
        </div>
        <div className='checkout-totals'>
          <div>Checkout total: </div>
          <div>$ {totalPrice}</div>
        </div>
        <div className='buttons-wrapper'>
        <button className='return-to-shop-button' onClick={() => {setShowCheckOut(false)}}>Return to shop</button>
        <button className='purchase-button'>Purchase</button>
        </div>
      </div>
    </div>
  );
}

export default App;
