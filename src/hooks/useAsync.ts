import { useEffect, useState } from "react";

const EMPTY_ERROR = "";

export default function useAsync<T>(callback: () => Promise<T>, defaultResult: T, refetch?: string | number | boolean) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState<T>(defaultResult);
    const [error, setError] = useState(EMPTY_ERROR);

    useEffect(() => {
        setLoading(true);
        setError(EMPTY_ERROR);

        callback()
            .then((response) => setResult(response))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [refetch]);

    return {
        loading,
        result,
        error,
    };
}
