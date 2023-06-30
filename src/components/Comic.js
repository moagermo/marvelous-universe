import React, { useState } from 'react';
import md5 from 'js-md5';

const Comics = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const timestamp = Number(new Date());
    let hash = md5.create();
    hash.update(timestamp + process.env.REACT_APP_MARVEL_PRIVATE_KEY + process.env.REACT_APP_MARVEL_PUBLIC_KEY);

    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value);

        fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${timestamp}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${hash.hex()}`)
        .then((res) => res.json())
        .then(data => {
            if(!data.errors){
                console.log(data)
                // setResults(data.results)
            } else {
                setResults([]);
            }
        });
    }

    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-wrapper'>
                        <input type="text" placeholder="Search for a movie" value={query} onChange={onChange}></input>
                    </div>
                    {results.length > 0 && (
                        <ul className='results'>
                            {results.map(movie => (
                                <li key={movie.id}>
                                    {movie}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Comics
