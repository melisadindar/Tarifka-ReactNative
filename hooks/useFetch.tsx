import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url:string){
    const [error, setError] = useState<null | string >(null);
    const[loading, setLoading] = useState <boolean>(true);
    const[data, setData] = useState <null | any>(null);

    const fetchData = async () => {
        try{
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        }
        catch(err:any){
            setError(err.message);
            setLoading(false);
        }

    }
    useEffect(() => {
        fetchData();
    }, [url]);
    return{error, loading, data};

}   

export default useFetch;