import { useEffect, useState } from "react";

export function useFetch<Response>(url:string |null) {
    const [data, setData] = useState<Response | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!url) return;

        fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error ('fetch error')
            }
            return response.json();

        })
        .then((json) => {
            setData(json as Response);
        }
    )
    .catch(() => {
        setError("uh oh something is wrong");
    });
}, [url] );
return {data, error};
 
    }