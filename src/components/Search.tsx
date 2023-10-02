import React from "react";
import useSearch from "../hooks/useSearch";

type SearchProps = {
  term: string;
};
const Search: React.FunctionComponent<SearchProps> = ({ term }) => {
  const { search, handleSearchButton, handleSearchInput } = useSearch(term);

  return (
    <div className="flex gap-4 justify-center mb-4">
      <input
        className="bg-white border-2 border-gray-200 rounded w-3/4 py-2 px-4 text-gray-700"
        type="text"
        placeholder="Enter any beer name here.."
        value={search}
        onChange={handleSearchInput}
      />
      <button
        className={`bg-white-500 text-blue-600 border font-bold py-2 px-4 rounded`}
        type="button"
        onClick={handleSearchButton}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
