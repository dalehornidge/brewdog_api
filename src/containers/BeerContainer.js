import '../App.css';
import React, {useState, useEffect} from "react";
import BeerList from "../components/BeerList";
import UserFavourites from "../components/UserFavourites";

const BeerContainer = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        getBeers()
    }, [])

    const getBeers = () => {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    return (
        <>
        <div class="BeerContainer">
        <BeerList class="BeerList" beers={beers}/>
        <UserFavourites class="UserFavourites"/>
        </div>
        </>

    );
}
 
export default BeerContainer;