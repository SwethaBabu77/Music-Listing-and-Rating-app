import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ViewAllSongs.css'

function SearchContents({searchQuery}) {
    const[searchResults,setSearchResults]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(``);
                setSearchResults(response.data);
            }catch(error){
                console.log(error);
            }
        }
        if(searchQuery && searchQuery.trim()!==""){
            fetchData();
        }
        else{
            setSearchResults([]);
        }
    },[searchQuery]);
    return (
        <div className="VHomebody">
            <div className="VHomebodyInfos">
                <div className='viewCard'>
                    <ul className="searchresults">
                    {searchResults.map((result) => (
                        <li key={result.id}>
                            <div className="">{result.title}</div>
                            <div className="">{result.artist}</div>
                            <div>{result.album}</div>
                            <div>{result.genre}</div>
                            <div>{result.releaseDate}</div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchContents