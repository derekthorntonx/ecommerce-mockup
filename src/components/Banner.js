function Banner( {date} ) {
    let todaysDate = date.split("T")[0];

    return (
        <div className="banner">
            <h1>Daily Shop for: {todaysDate}</h1>
        </div>
    )
}

export default Banner;