import { useState } from 'react'
import SearchBar from './SearchBar'
import '../styles/App.css'

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  function getBeers(search: string) {
    fetch(
      `https://api.punkapi.com/v2/beers${search ? `?beer_name=${search}` : ''}`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true)
          setItems(data)
          console.log(data)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }

  return (
    <main>
      <SearchBar onChange={(e) => getBeers(e)} />
      {/* content */}
      {/* search results */}
    </main>
  )
}

export default App
