import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { buildQueryString } from '../utils';

const useSearch = (defaultSearchTerm: string = "") => {
    const navigate = useNavigate();

    const [search, setSearch] = useState(defaultSearchTerm);

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const handleSearchButton = () => {
        const queryString = buildQueryString("q", search.trim(), false);

        navigate(`/${queryString}`);
    };

    return {
        search,
        handleSearchInput,
        handleSearchButton
    }
}

export default useSearch