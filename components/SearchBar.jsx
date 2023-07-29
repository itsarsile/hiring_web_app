export default function SearchBar() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="join mx-auto flex-wrap">
        <input
          type="text"
          className="join-item w-full md:w-screen flex-1 lg:w-[50rem] input input-bordered rounded-md"
        />
        <select
          name=""
          id=""
          className="join-item w-[6.5rem] lg:w-[16.5rem] select select-bordered "
        >
          <option value="" disabled selected>
            Filter
          </option>
          <option value="">Sortir berdasarkan nama</option>
          <option value="">Sortir berdasarkan skill</option>
          <option value="">Sortir berdasarkan lokasi</option>
          <option value="">Sortir berdasarkan freelance</option>
          <option value="">Sortir berdasarkan fulltime</option>
        </select>
        <button className="btn bg-primary text-white join-item rounded-md">Search</button>
      </div>
    </div>
  );
}
