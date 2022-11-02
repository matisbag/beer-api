import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Results from './Results'
import '../styles/App.css'

function App() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.punkapi.com/v2/beers${search ? `?beer_name=${search}` : ''}`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setLoading(false)
          setItems(data)
          console.log(data)
        },
        (error) => {
          setLoading(false)
          setError(error)
        }
      )
  }, [search])

  return (
    <main>
      <SearchBar onSearchUpdate={(e) => setSearch(e)} />
      <Results beers={items} loading={loading} />
    </main>
  )
}

export default App
