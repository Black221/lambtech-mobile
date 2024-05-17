import instance from "@/api/axios"
import { useState } from "react"


const useAxios = () => {

    const [response, setResponse] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async (url: string, method: "post" | "get" | "put" | "patch" | "delete", data: any) => {
        setLoading(true);
        try {
            const res = await instance[method](url, data);
            setResponse(res.data);
            setLoading(false);
        } catch (err: any) {
            setError(err);
            setLoading(false);
        }
    }

    return [response, error, loading, fetchData];
}

export default useAxios;