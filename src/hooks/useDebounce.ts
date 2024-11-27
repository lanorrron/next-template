import {useEffect, useState} from "react";

function useDebounce<T>(value: string, delay: number): T {
    const [debounceValue, setDebounceValue] = useState<T>(value)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)

        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debounceValue
}

export default useDebounce