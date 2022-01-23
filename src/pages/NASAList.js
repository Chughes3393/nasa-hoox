import React, { useState } from 'react'

import axios from 'axios'

import NASAData from '../components/NASAData'

const NASAList = () => {


  // const [like, setLike] = useState('unlike')
  const [userInput, setUserInput] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  // const toggle = () => {

  //   like === 'unliked' ? setLike('liked') : setLike('unliked')

  // }

  const handleChange = (e) => {

    setUserInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    setLoading(true)

    axios.get(`https://images-api.nasa.gov/search?q=${userInput}`)

      .then(response => {
        setData(response.data.collection.items)
        setLoading(false)
      })
      .catch(err => console.error(err))

  }
  return (
    <div>
      <h1>NASAGRAM</h1>


      <form onSubmit={handleSubmit}>

        <label htmlFor='userInput'>Search: </label>

        <input
          type='text'
          name='userInput'
          id='userInput'
          onChange={handleChange}
          value={userInput}
        />

        <input type='submit' value='submit' />

      </form>
      {
        loading
          ?
          <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="" />
          :
          <div id='nasa-cont'>
            {
              data.map((item) => {
               
                return (
                  <NASAData key={item.data[0].nasa_id} item={item} />
                )
              })
            }
          </div>
      }
    </div>
  );
}

export default NASAList;
