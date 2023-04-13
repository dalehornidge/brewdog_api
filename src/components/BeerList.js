import React, { useState } from 'react';
import BeerItem from "./BeerItem";
import '../App.css';

const BeerList = ({ beers }) => {
  const [selectedBeerIndex, setSelectedBeerIndex] = useState(null);

  const handleSelectedBeer = (index) => {
    setSelectedBeerIndex(index === selectedBeerIndex ? null : index);
  };

  const beerSingleItems = beers.map((beer, index) => {
    return (
      <BeerItem
        beer={beer}
        key={index}
        isSelected={selectedBeerIndex === index}
        onSelectedBeer={() => handleSelectedBeer(index)}
      />
    );
  });

  return (
    <>
      <ul className="BeerItem">
        {beerSingleItems}
      </ul>
    </>
  );
};

export default BeerList;

