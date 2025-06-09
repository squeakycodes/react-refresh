function SearchBar({
  filterText,
  showStockedOnly,
  setFilterText,
  setShowStockedOnly,
}) {
  return (
    <>
      <label>
        Search:{" "}
        <input
          name="SearchBar"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </label>
      <br />
      <label>
        Only show products in stock{" "}
        <input
          type="checkbox"
          name="productsInStockCheckbox"
          checked={showStockedOnly}
          onChange={(e) => setShowStockedOnly(e.target.checked)}
        />
      </label>
    </>
  );
}

export default SearchBar;
