function SearchBar() {
  return <>
    <label>
      Search: <input name="SearchBar" />
    </label>
    <br/>
    <label>
      Only show products in stock <input type="checkbox" name="productsInStockCheckbox" />
    </label>
  </>
}

export default SearchBar