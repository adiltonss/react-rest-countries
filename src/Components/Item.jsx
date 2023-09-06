import { Link } from "react-router-dom"

export default function Item({item, items}){
    return(
        <div className="item">
            <Link to='/detail' state={{state:{item:item.cca3}}} />
            <img src={item.flags.png} alt="" />
            <div className="item-data">
                <h2>{item.name.common}</h2>
                <p><strong>Population:</strong> {item.population}</p>
                <p><strong>Region:</strong> {item.region}</p>
                <p><strong>Capital:</strong> {item.capital}</p>
            </div>
        </div>
    )
}


//item.name.common
//  item.capital
//item.population
//item.region