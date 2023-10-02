import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function useQuery(param: string) {
    const { search } = useLocation();

    return useMemo(() => {
        const queryParam = new URLSearchParams(search).get(param);

        return queryParam || "";
    }, [search, param]);
}