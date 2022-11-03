import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Results from './Results'
import { API_URL, Beer } from '../utils/punkapi'
import '../styles/App.css'

function App() {
  const [search, setSearch] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Beer[]>([])

  useEffect(() => {
    setLoading(true)
    fetch(`${API_URL}${search ? `?beer_name=${search}` : ''}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Something went wrong')
      })
      .then(
        (data) => {
          setLoading(false)
          setItems(data)
          setError('')
        },
        (error) => {
          setLoading(false)
          setError(error.message)
        }
      )
  }, [search])

  return (
    <main>
      <SearchBar onSearchUpdate={(e) => setSearch(e)} />
      <Results beers={items} loading={loading} error={error} />
    </main>
  )
}

export default App
