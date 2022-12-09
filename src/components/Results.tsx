import ErrorAlert from './ErrorAlert'
import Loading from './Loading'
import { Beer } from '../utils/punkapi'

type Props = {
  beers: Beer[] | null
  loading: boolean
  error: string | null
}

function Results({ beers, loading, error }: Props) {
  return (
    <div className="flex flex-col space-y-2 py-4">
      <Loading loading={loading} />
      {!!error && <ErrorAlert error={error} />}
      <div className="flex flex-col space-y-6">
        {beers?.map((beer) => (
          <section
            key={beer.id}
            className="w-full flex items-start rounded-md bg-white p-4 shadow"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-md border border-gray-100 bg-gray-50 p-3">
              <img
                src={beer.image_url || '/no-beer.png'}
                alt={beer.name}
                className="max-h-full max-w-full"
              />
            </div>

            <div className="ml-4">
              <h2 className="font-semibold">{beer.name}</h2>
              <p className="mt-2 text-sm text-gray-500">{beer.tagline}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Results
