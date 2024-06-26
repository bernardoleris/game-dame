import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";

//SearchBar pode ser um componente generico (shared)
function Searchbar(){
    return(
        <div className="input-wrapper">
            <input />
            <FaSearch id="search-icon"/>
        </div>
    );
};

export default Searchbar;

