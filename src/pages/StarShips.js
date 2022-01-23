
import React, { useState, useEffect } from 'react'

const StarShips = () => {

    const [shipURL, setShipURL] = useState('')
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchShips() {
            let res = await fetch('https://swapi.dev/api/starships/?format=json')
            let data = await res.json();
            setShipURL(data.results)
        }
        fetchShips()
    }, [])

    console.log('ship', shipURL[9]?.name)

    return (
        <div>
            <div className="card">
                <div className="card-body overflow-auto" style={{ height: '18rem' }}>
                    <h5 className="card-title">{shipURL[0]?.name}</h5>

                </div>
            </div>

        </div>
    );

}


export default StarShips;
