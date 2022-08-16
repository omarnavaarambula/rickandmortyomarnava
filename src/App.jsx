import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'




function App() {

const [location, setLocation ] = useState()
const [searchInput,setSearchInput ] = useState('')  
 
useEffect(() => {
let randomLocation

if (searchInput === '') {
 randomLocation = Math.floor(Math.random() * (126 - 1) + 1)
} else{
randomLocation = searchInput
}


const URL=`https://rickandmortyapi.com/api/location/${randomLocation}`
axios.get(URL)
.then(res => setLocation(res.data))
.catch(err => console.log (err))
}, [searchInput])



  
const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }




console.log(searchInput) 









return (
    <div className="App">
     
        <h1 className='imgR'> Rick and Morty</h1>

    <form  className='searchC' onSubmit={handleSubmit}>
      <input id= 'search' type="text"/>
        <button>Search</button>
       </form>
        <LocationInfo location={location} />
        <div>
          {
            location?.residents.map(url =>(
              <CardResident
              key={url}
              url={url}
              />
            ))
          }        
        </div>
    </div>
  )
}

export default App
 