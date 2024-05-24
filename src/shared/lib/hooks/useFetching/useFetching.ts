import {useState} from "react";

export const useFetching = (callback: () => Promise<void>) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            const error = e as Error;
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching as () => Promise<void>, isLoading as boolean, error as string];
};
