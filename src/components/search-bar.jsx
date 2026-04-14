const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="
          w-200
          h-9
          rounded-lg
          bg-muted
          border border-border
          px-3 pr-8
          text-sm
          text-foreground
          placeholder:text-muted-foreground
          focus:outline-none
          focus:ring-2 focus:ring-primary
          focus:border-primary
          transition
        "
      />
    </div>
  );
};

export default SearchBar;