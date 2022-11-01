import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Results from './Results'
import '../styles/App.css'

function App() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
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
  }, [search])

  return (
    <main>
      <SearchBar onSearchUpdate={(e) => setSearch(e)} />
      <Results beers={items} />
    </main>
  )
}

export default App
