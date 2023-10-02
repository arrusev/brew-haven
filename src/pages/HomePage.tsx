import React from "react";

import useQuery from "../hooks/useQuery";
import useAsync from "../hooks/useAsync";
import Search from "../components/Search";
import BeerList from "../components/BeerList";
import { PendingSection } from "../components/Layout";
import { fetchBeersByName } from "../utils";

const HomePage: React.FunctionComponent = () => {
  const query = useQuery("q");
  const { loading, error, result } = useAsync(() => fetchBeersByName(query), [], query);

  return (
    <div>
      <Search term={query} />

      <PendingSection loading={loading} error={error}>
        <BeerList beers={result} />
      </PendingSection>
    </div>
  );
};

export default HomePage;
