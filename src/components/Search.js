import React, {useState} from "react";

function Search({setSearch}){
    const [term,setTerm] = useState("");

    const searchImage = e => {
        e.preventDefault();

        setSearch(term);
    }

    return(
        <form onSubmit={searchImage} className = "row text-center">
            <div >
                <div className = "left">
                    <input 
                        type = "text"
                        placeholder = "Search a picture"
                        onChange = {e => setTerm(e.target.value)}
                    />
                </div>
                <div className = "right">
                    <input
                        type = "submit"
                        value = "Search"
                    />
                </div>
            </div>
        </form>
    )
}

export default Search;