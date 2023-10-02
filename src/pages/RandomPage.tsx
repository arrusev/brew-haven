import React from "react";

import useAsync from "../hooks/useAsync";
import useBeerSound from "../hooks/useBeerSound";
import BeerCard from "../components/BeerCard";
import { PendingSection } from "../components/Layout";
import { fetchRandomBeer } from "../utils";

const RandomPage: React.FunctionComponent = () => {
  const { loading, error, result } = useAsync(() => fetchRandomBeer(), []);
  const { playOpenBottleSound } = useBeerSound();

  return (
    <PendingSection loading={loading} error={error}>
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        {result.length > 0 ? (
          <BeerCard beer={result[0]} onImageClick={playOpenBottleSound} />
        ) : (
          <div>Couldn't load a random beer </div>
        )}
      </div>
    </PendingSection>
  );
};

export default RandomPage;
