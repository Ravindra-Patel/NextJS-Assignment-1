const Search = ({ setQuery, setUrl }) => {
  return (
    <div class="flex justify-end my-5">
      <div>
        <input
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div>
        <button
          class="bg-blue-500 mx-5 sm:text-sm sm:py-0 h-10 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded "
          onClick={setUrl}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
