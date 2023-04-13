import React, { useState } from 'react';
import BeerDescription from "./BeerDescription";
import BeerImage from "./BeerImage";
import '../App.css';

const BeerItem = ({ beer, isSelected, onSelectedBeer }) => {
  if (!beer) return;

  return (
    <>
      <li>
        <h4 onClick={onSelectedBeer}>{beer.name}</h4>
        {isSelected && <div class="BeerDescription">{beer.description}</div>}
        <div>{beer.img}</div>
      </li>
    </>
  );
};

export default BeerItem;

