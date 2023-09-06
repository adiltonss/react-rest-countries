import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"


export default function Detail(props) {
    let { state } = useLocation()
    const [itemToFetch, setItemToFetch] = useState(state.state.item)
    const [item, setItem] = useState(null)
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${itemToFetch}`)
            .then(data => data.json())
            .then(data => {
                setItem(data[0])
            })
    }, [itemToFetch])


    return (
        <>
            {item ? (
                <>
                    <section className="back-btn-container">
                        <Link to="/">
                            <button className="back-btn">Back</button>
                        </Link>
                    </section>
                    <section className="detail-cont">
                        <div className="flag-container">
                            <img src={item.flags.png} alt="" />
                        </div>
                        <div className="data-container">
                            <h2>{item.name.common}</h2>
                            <div className="row">
                                <p><strong>Native Name: </strong>{item.name.official}</p>
                                <p><strong>Population: </strong> {item.population.toLocaleString('pt-BR', { style: 'decimal' })}</p>
                                <p><strong>Region: </strong>{item.region}</p>
                                <p><strong>Sub Region: </strong>{item.subregion}</p>
                                <p><strong>Capital: </strong>{item.capital ? item.capital[0] : ""}</p>
                            </div>
                            <div className="row col">
                                <p><strong>Top Level Domain: </strong>{item.tld ? item.tld[0] : ''}</p>
                                <p><strong>Currencies: </strong>{Object.values(item.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ')}</p>
                                <p><strong>Languages: </strong>{Object.values(item.languages).map(lang => `${lang}`).join(', ')}</p>
                            </div>
                            <div className="row borders-cont">
                                <h2>Border Countries:</h2>
                                {item.borders ? (item.borders.map(btn => <Link to='/detail' className="borders-btn" key={btn} onClick={() => setItemToFetch(btn)} state={{ state: { item: itemToFetch } }}>{btn}</Link>)) : (<></>)}
                            </div>
                        </div>
                    </section>
                </>
            ) : (<p>Loading...</p>)}
        </>
    )
}