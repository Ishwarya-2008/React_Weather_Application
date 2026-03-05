export default function SearchBar({city,setCity,onSearch}) {
    return (
        <div className="search-bar">
            <input 
                placeholder="Search City" 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch();
                    }
                }}
            ></input>
            <button onClick={onSearch}>Search</button>
        </div>
    )
}