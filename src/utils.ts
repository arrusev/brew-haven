import { Beer } from "./typings";

export const buildQueryString = (paramKey: string, paramValue: string, allowEmptyValue: boolean = true): string => {
    let query = new URLSearchParams({ [paramKey]: paramValue });

    if (!allowEmptyValue && !paramValue) {
        query.delete(paramKey);
    }

    const queryString = query.toString();
    return queryString ? "?" + queryString : "";
}

const BEERS_API_URL = "https://api.punkapi.com/v2/beers";
const BEERS_API_IDS_SEPARATOR = "|";
const BEERS_API_NAME_SEPARATOR = "_";

const GET = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    return response.json();
}

export const fetchBeersByName = async (name: string): Promise<Beer[]> => {
    const nameParam = name.replaceAll(" ", BEERS_API_NAME_SEPARATOR);
    const queryString = buildQueryString("beer_name", nameParam, false);

    return GET(`${BEERS_API_URL}/${queryString}`, { cache: "force-cache" });
};

export const fetchBeersByIds = async (ids: number[]): Promise<Beer[]> => {
    if (ids.length === 0) {
        return [];
    }

    const idsParam = ids.join(BEERS_API_IDS_SEPARATOR);
    const queryString = buildQueryString("ids", idsParam);

    return GET(`${BEERS_API_URL}/${queryString}`, { cache: "force-cache" });
};


export const fetchRandomBeer = async (): Promise<Beer[]> => {
    return GET(`${BEERS_API_URL}/random`);
};