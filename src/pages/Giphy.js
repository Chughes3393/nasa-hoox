import React, { useState, useEffect } from 'react';

import axios from 'axios'

const Giphy = () => {

    const [gifURL, setGifURL] = useState('')

    const fetchGif = async () => {

        try {
            const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=Mcz9zLkql5Vm74sUZxt4LYONio7NoG1h&tag=&rating=g')

            setGifURL(response.data.data.images.original.url)


        } catch (error) {
            console.error(error)
        } 

    }
    // console.log('state', gifURL)

    useEffect(() => {
        // console.log('We mounted')

        fetchGif()
        // An empty dependency array allows us to call our useEffect once only
        // any dependency you pass inside our dependency array will tell our component to listen for changes in those dependencies
    }, [])

    return (

        <div>

            <button onClick={fetchGif}>Random</button>
            {
                gifURL && <img src={gifURL} alt="random gif" />
            }
        </div>
    );
}

export default Giphy