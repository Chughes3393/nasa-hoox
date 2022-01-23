import React from 'react'
import { useState, useContext } from 'react'
import Heart from 'react-heart'
import UserContext from '../contexts/UserContext'

const NASAData = (props) => {
    const [active, setActive] = useState(false)
    const user = useContext(UserContext)
    console.log('We are inside NASAData our user is', user)
    return (
// bootstap card format then passed props 
            <div className="card">
                <img src={props.item.links?.[0].href} className="card-img-top" alt="..." />
                <div className="card-body overflow-auto" style={{ height: '18rem' }}>
                    <h5 className="card-title">{props.item.data[0].title}</h5>
                    <p className="card-text">{props.item.data[0].description}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                <div className='heart'>
                    <Heart isActive={active} onClick={() => setActive(!active)} />
            </div>
            </div> 
    );
}

export default NASAData;
