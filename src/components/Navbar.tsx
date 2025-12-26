import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SearchBar(){
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSearch(){
        const searchQuery = query.trim();
        if (!searchQuery) return;
       
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }

    return (
        <>
        <nav className='navbar'>
            <h2 className='navTitle'>
            <Link to='/'>Recipe Discovery</Link>
            </h2>
   

        <div className='search'>
            <input
            className="searchInput"
            type='text'
            value={query}
            placeholder="Whats on the menu?"
            onChange={(e) => setQuery(e.target.value)}
            />

            <button className='searchButton' type='button' onClick={handleSearch}>Search</button>
        </div>

        <div className='navLinks'>
        <Link to='/favorites' className='navLink'>Favorites</Link>
        </div>
        </nav>
</>
    )
}