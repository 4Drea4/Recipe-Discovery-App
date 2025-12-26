import { useState } from "react";


export default function SearchBar(){
    const [query, setQuery] = useState("");
    

    function handleSearch(){
        const searchQuery = query.trim();
        if (!searchQuery) return;
       
    }

    return (
        <div className='navBar'>
            <input
            type='text'
            value={query}
            placeholder="Whats on the menu?"
            onChange={(e) => setQuery(e.target.value)}
            />

            <button type='button' onClick={handleSearch}>Search</button>
        </div>
    )
}