import React from "react";

import useAsync from "../hooks/useAsync";
import useStore from "../store";
import BeerList from "../components/BeerList";
import { PendingSection } from "../components/Layout";
import { fetchBeersByIds } from "../utils";

const FavoritesPage: React.FunctionComponent = () => {
  const { favorites } = useStore();
  const favoriteBeersIds = Array.from(favorites.keys());
  const { loading, error, result } = useAsync(() => fetchBeersByIds(favoriteBeersIds), [], favoriteBeersIds.length);

  return (
    <PendingSection loading={loading} error={error}>
      {result.length > 0 ? (
        <BeerList beers={result} />
      ) : (
        <div className="flex w-full justify-center">Your favorites beer list is empty</div>
      )}
    </PendingSection>
  );
};

export default FavoritesPage;
