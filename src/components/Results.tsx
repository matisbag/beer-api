type Props = {
  beers: Array<any> // Array<Beer>
  loading: boolean
}

function Results({ beers, loading }: Props) {
  return (
    <div className="flex flex-col space-y-2 py-4">
      <div
        className={
          'flex justify-center items-center bg-gray-100 rounded-sm p-2 ' +
          (loading ? '' : 'invisible')
        }
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Loading...
      </div>
      <div className="flex flex-col space-y-6">
        {beers.map((beer) => (
          <section
            key={beer.id}
            className="w-full flex items-start rounded-md bg-white p-4 shadow"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-md border border-gray-100 bg-gray-50 p-3">
              <img
                src={beer.image_url}
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
