import { useState } from 'react'
import SearchBar from './SearchBar'
import Results from './Results'
import { API_URL, Beer } from '../utils/punkapi'
import '../styles/App.css'
import { useFetch } from '../utils/useFetch'

function App() {
  const [search, setSearch] = useState<string>('')

  const {
    error,
    loading,
    data: beers,
  } = useFetch<Beer[]>(`${API_URL}${search ? `?beer_name=${search}` : ''}`)

  return (
    <main>
      <SearchBar value={search} onSearchUpdate={(e) => setSearch(e)} />
      <Results beers={beers} loading={loading} error={error} />
    </main>
  )
}

export default App
