import { RiSearchLine } from "@remixicon/react";

function SearchBar() {
  return (
    <div
      className="bg-white border border-gray-300 rounded-full overflow-hidden
 w-xs sm:w-96 shadow-util focus-within:border-lime-600 p-0.5
 focus-within:ring-1 focus-within:ring-lime-600 transition-all flex
 "
    >
      <input
        type="text"
        placeholder="Search for anything"
        className="outline-none flex-1 text-sm px-4 py-2"
      />
      <button
        className="
  bg-lime-500 hover:bg-lime-600
   w-16 h-auto rounded-full 
  flex items-center justify-center
  transition-colors"
      >
        <RiSearchLine />
      </button>
    </div>
  );
}

export default SearchBar;
