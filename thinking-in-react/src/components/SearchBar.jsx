function SearchBar({
  filterText,
  showStockedOnly,
  onFilterTextChange,
  onShowStockedOnlyChange
}) {
  return <>
    <label>
      Search: <input
      name="SearchBar"
      value={filterText}
      onChange={(e) => onFilterTextChange(e.target.value)} />
    </label>
    <br/>
    <label>
      Only show products in stock <input
      type="checkbox"
      name="productsInStockCheckbox"
      checked={showStockedOnly}
      onChange={(e) => onShowStockedOnlyChange(e.target.checked)} />
    </label>
  </>
}

export default SearchBar