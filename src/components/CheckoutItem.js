function CheckoutItem( {item, index, cartItems, setCartItems } ) {

    function handleCheckoutDelete(){
        setCartItems(cartItems.slice(0,index).concat(cartItems.slice(index+1)))
    }

    return (
        <div className="checkout-item-wrapper">
            <div className="checkout-item-name">{item.name}</div>
            <div className="checkout-item-price">{item.price}</div>
            <button onClick={handleCheckoutDelete}>Remove From Cart</button>
        </div>
    )
}

export default CheckoutItem;