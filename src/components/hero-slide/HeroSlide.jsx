import React, { useEffect, useState } from 'react'
// import apiConfig from '../../api/apiConfig';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';;

const HeroSlide = () => {

    const [movieItems, setMovieItems] = useState([]);
    console.log(movieItems)


    useEffect(() => {
        const getData = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 4));
                console.log(response);
            } catch {
                console.log('error');
            }
        }
        getData();
    }, [])

    return (
        <div className='hero-slide'>HeroSlide</div>
    )
}

export default HeroSlide