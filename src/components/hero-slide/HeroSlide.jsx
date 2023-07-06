import React, { useEffect, useState } from 'react'
// import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';

const HeroSlide = () => {

    const [movieItems, setMovieItems] = useState([]);
    console.log(movieItems)

    const getData = () => {
        // fetch(apiConfig.getMovieLis)
        const url= tmdbApi.getMoviesList('popular', {})
        fetch(url)
        .then(res => res.json())
        .then(data => setMovieItems(data.results));
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='hero-slide'>HeroSlide</div>
    )
}

export default HeroSlide