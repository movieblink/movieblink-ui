import React, { useEffect, useState } from 'react'

const HeroSlide = () => {

    const [movieItems, setMovieItems] = useState([]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d072fa544eae40d6672bf090dd472577&language=en-US`)
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