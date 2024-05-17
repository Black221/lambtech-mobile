import {useEffect, useState} from "react";


const useDebounce = (value: any, delay:number = 500) => {

    const [debouncedValue, setDebouncedValue] = useState<any>();

    useEffect(() => {
        let id = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(id)
    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;