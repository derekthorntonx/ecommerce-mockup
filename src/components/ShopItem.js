function ShopItem( {itemName, itemDescription, itemPrice, itemRarity, itemPicture} ) {
    let bgColour;
    let rarity = itemRarity.toUpperCase();
    
    switch (itemRarity){
        case 'epic':
            bgColour = 'rgba(156,76,187,0.8)';
            break;
        case 'common':
            bgColour = 'rgba(123,127,130,0.8)';
            break;
        case 'uncommon':
            bgColour = 'rgba(49,146,53,0.8)';
            break;
        case 'rare':
            bgColour = 'rgba(77,82,248,0.8)';
            break;
        case 'legendary':
            bgColour = 'rgba(242,175,26,0.8)';
            break;
        default:
            bgColour = 'rgba(255,255,255,0.8)';
            break;
    }

    return (
    <div className="shop-item">
        <div className="shop-item-header" style={{backgroundColor: bgColour}}>
            <h1 style={{margin: '0'}}>{itemName}</h1>
            <h5 style={{margin: '0'}}>{rarity}</h5>
        </div>
        <img src={itemPicture} alt=''/>
        <div className="shop-item-footer" style={{backgroundColor: bgColour}}>
            <div>"{itemDescription}"</div>
            <div>${itemPrice}</div>
            <button className="shop-item-button" onClick={()=>{console.log('hello world')}}>+</button>
        </div>
    </div>
    )
}

export default ShopItem;