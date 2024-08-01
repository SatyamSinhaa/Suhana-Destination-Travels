import React, { useState } from 'react'
import "./SearchBar.css"
import { HiMagnifyingGlass } from "react-icons/hi2";
import Store from '../Components/Content/ContentTitles/Store';

const SearchBar = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const [color, setColor] = useState(false)
    const handleColor =()=>{
        if(window.scrollY>=400){
            setColor(true);
        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll", handleColor)
    
    return (
        <div className='searchbar'>
            <center className={color ? "color": ""}><div className='searchbarinput-icon'>
                <HiMagnifyingGlass className='searchbarinput-icon-icon' />
                <input
                    type="text"
                    placeholder='Search for the destination'
                    className='bar'
                    onChange={inputHandler}
                    label="Search"
                />
            </div></center>
            <div className='searchbarinputlist'>
                {inputText ?
                    <Store input={inputText} />
                    : ""}
            </div>
        </div>
    )
}

export default SearchBar
