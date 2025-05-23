import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
import { useState } from "react"

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('')
  const [showStockedOnly, setShowStockedOnly] = useState(false) 
  return <>
    <SearchBar filterText={filterText} showStockedOnly={showStockedOnly} />
    <br/>
    <ProductTable products={products} filterText={filterText} showStockedOnly={showStockedOnly} />
  </>
}

export default FilterableProductTable