import { useSearchParams } from "react-router-dom";

export default function SearchPage(){
    const [params] = useSearchParams();
    const query = params.get("query");

    return (
        <div>
            <h1>Search Results</h1>
            <p> Seraching </p>
        </div>
    )
}