import { useState, useEffect } from 'react'

export type FetchOptions<B = any> = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: B
  onSuccess?: () => void
  onError?: () => void
}

export function useFetch<T, B = any>(url: string, options?: FetchOptions<B>) {
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
    let cancel = false

    setAsyncState((s) => ({ ...s, loading: true }))
    fetch(url, {
      headers: {
        Accept: 'application/json',
      },
      ...(options?.body ? { body: JSON.stringify(options.body) } : {}),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Something went wrong')
      })
      .then(
        (data: T) => {
          if (!cancel) {
            setAsyncState({
              loading: false,
              data,
              error: null,
            })
            options?.onSuccess?.()
          }
        },
        (error) => {
          if (!cancel) {
            setAsyncState((s) => ({
              ...s,
              loading: false,
              error: error.message,
            }))
            options?.onError?.()
          }
        }
      )

    return () => {
      cancel = true
    }
  }, [url, options])

  return asyncState
}
