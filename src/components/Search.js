const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className='my-2 flex justify-center items-center'>
      <form>
        <input
          className='rounded-sm text-gray-800 px-2 py-1'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          type='submit'
          className='bg-blue-500 text-white mx-3 px-2 py-1 rounded-sm'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
