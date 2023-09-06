import Item from "../Components/Item"
import { useState, useEffect } from "react"

export default function Home({currentCountry, setCurrentCountry}) {
    const [items, setItems] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);
    


    useEffect(()=>{
        getData()
    }, [])


    function getData(){
        fetch("https://restcountries.com/v3.1/all")
        .then(data => data.json())
        .then(data => {
            setItems(data)
            setVisibleItems([...data])
        })
    }

    function searchByInput(e){
        const val = e.target.value.toLowerCase();
        if (val === '') {
            setVisibleItems([...items]); // Mostrar todos os itens quando o input estiver vazio
        } else {
            const newItems = items.filter((item) => item.name.common.toLowerCase().includes(val.toLowerCase()));
            setVisibleItems(newItems)
        }
    }

    function visibleByFilter(e){
        const val = e.target.value.toLowerCase();
        if (val === 'all') {
            setVisibleItems([...items]); // Mostrar todos os itens quando "all" for selecionado
        } else {
            const newItems = items.filter((item) => val === item.region.toLowerCase());
            setVisibleItems(newItems)
        }
    }

    return (
        <>
            <section className="search-fields">
                <label className="search-bar-container" htmlFor="search_input" >
                    <div><i className="fi fi-br-search"></i></div>
                    <input type="search" name="search_input" onChange={(e) => {searchByInput(e)}} id="search_input" />
                </label>
                <div>
                <select className="country-filter" onChange={(e)=> {visibleByFilter(e)}} name="" id="">
                    <option value="all" defaultChecked={true}>Filter By Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asian</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
                </div>
            </section>
            <section className="countries-container">
                {visibleItems.map((item => <Item key={item.flag} item={item} items={items} />))}
            </section>
        </>
    )
}

