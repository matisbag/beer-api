import { useCallback, useMemo, useState } from 'react'
import SearchBar from './SearchBar'
import Results from './Results'
import { API_URL, Beer } from '../utils/punkapi'
import '../styles/App.css'
import { FetchOptions, useFetch } from '../utils/useFetch'

function App() {
  const [search, setSearch] = useState<string>('')

  const onError = useCallback(() => {
    console.log('there was an error')
  }, [])
  const options: FetchOptions = useMemo(
    () => ({
      method: 'GET',
      onError,
    }),
    [onError]
  )

  const {
    error,
    loading,
    data: beers,
  } = useFetch<Beer[]>(
    `${API_URL}${search ? `?beer_name=${search}` : ''}`,
    options
  )

  return (
    <main>
      <SearchBar value={search} onSearchUpdate={(e) => setSearch(e)} />
      <Results beers={beers} loading={loading} error={error} />
    </main>
  )
}

export default App
