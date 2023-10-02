import React from "react";
import { Beer } from "../typings";
import BeerCard from "./BeerCard";
import useBeerSound from "../hooks/useBeerSound";

type BeerListProps = {
  beers: Beer[];
};
const BeerList: React.FunctionComponent<BeerListProps> = ({ beers }) => {
  const { playOpenBottleSound } = useBeerSound();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-3 gap-4">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} onImageClick={playOpenBottleSound} />
      ))}
    </div>
  );
};

export default BeerList;
