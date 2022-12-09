import { useState, useEffect } from 'react'

export function useFetch<T>(url: string) {
  const [asyncState, setAsyncState] = useState<{
    loading: boolean
    error: string | null
    data: T | null
  }>({
    loading: false,
    error: null,
    data: null,
  })

  useEffect(() => {
    setAsyncState((s) => ({ ...s, loading: true }))
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Something went wrong')
      })
      .then(
        (data: T) => {
          setAsyncState({
            loading: false,
            data,
            error: null,
          })
        },
        (error) => {
          setAsyncState((s) => ({
            ...s,
            loading: false,
            error: error.message,
          }))
        }
      )
  }, [url])

  return asyncState
}
