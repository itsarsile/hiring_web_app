export default function SearchBar({ searchQuery, setSearchQuery, searchFilter, setSearchFilter }) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="join mx-auto flex-wrap">
        <input
          type="text"
          className="join-item w-full md:w-screen flex-1 lg:w-[50rem] input input-bordered rounded-md"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <select
          name=""
          id=""
          className="join-item w-[6.5rem] lg:w-[16.5rem] select select-bordered "
          value={searchFilter}
          onChange={setSearchFilter}
        >
          <option value="" disabled selected>
            Filter
          </option>
          <option value="">Sort by name</option>
          <option value="">Sort by skill</option>
          <option value="">Sort by location</option>
          <option value="">Sort by freelance</option>
          <option value="">Sort by fulltime</option>
        </select>
        <button className="btn bg-primary text-white join-item rounded-md">Search</button>
      </div>
    </div>
  );
}
