type Props = {
  onSearchUpdate: (value: string) => void
}

function SearchBar({ onSearchUpdate }: Props) {
  return (
    <div className="flex flex-wrap w-full mb-4">
      <input
        type="search"
        className="flex-1 px-3 py-1.5 min-w-0 text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Search"
        onChange={(e) => onSearchUpdate(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
