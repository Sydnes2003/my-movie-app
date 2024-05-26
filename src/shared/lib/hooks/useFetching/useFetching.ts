import {useCallback, useState} from "react";

type UseFetchingReturnType = [() => Promise<void>, boolean, string | null];

export const useFetching = (callback: () => Promise<void>): UseFetchingReturnType => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetch = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            await callback();
        } catch (e) {
            const error = e as Error;
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [callback]);

    return [fetch, isLoading, error];
};
