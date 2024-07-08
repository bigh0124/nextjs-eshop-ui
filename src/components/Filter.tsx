const Filter = () => {
  return (
    <div className="mt-12 flex justify-between gap-6">
      <div className="flex gap-6 flex-wrap">
        <select name="type" id="" className="py-2 px-4 bg-gray-100 rounded-xl text-sx font-medium cursor-pointer">
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          className="pl-4 rounded-2xl text-sm w-24 ring-1 ring-gray-400"
          placeholder="Min Price"
          name="min"
        />
        <input
          type="text"
          className="pl-4 rounded-2xl text-sm w-24 ring-1 ring-gray-400"
          placeholder="Max Price"
          name="max"
        />
        <select name="size" id="" className="py-2 px-4 bg-gray-100 rounded-xl text-sx font-medium cursor-pointer">
          <option value="">Size</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select name="color" id="" className="py-2 px-4 bg-gray-100 rounded-xl text-sx font-medium cursor-pointer">
          <option value="">Color</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select name="category" id="" className="py-2 px-4 bg-gray-100 rounded-xl text-sx font-medium cursor-pointer">
          <option value="">Category</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select name="all" id="" className="py-2 px-4 bg-gray-100 rounded-xl text-sx font-medium cursor-pointer">
          <option value="">All Filters</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      <div>
        <select name="sort" id="" className="py-2 px-4 bg-gray-100 rounded-xl text-sx font-medium cursor-pointer">
          <option value="">Sort By</option>
          <option value="high">Price (low to high)</option>
          <option value="low">Price (high to low)</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
