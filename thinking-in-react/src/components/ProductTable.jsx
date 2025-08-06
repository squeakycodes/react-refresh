function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <>
      <tr key={product.name}>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

function ProductCategory({ category, products }) {
  const productsInCategory = products.filter(
    (product) => product.category === category
  );
  const productComponents = [];
  productsInCategory.forEach((p) =>
    productComponents.push(<ProductRow product={p} key={p.name} />)
  );

  return (
    <>
      <label>{category}</label>
      <table>
        <tbody>{productComponents}</tbody>
      </table>
    </>
  );
}

function ProductTable({ products, search, filterText, showStockedOnly }) {
  if (filterText) {
    products = products.filter((product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }
  if (showStockedOnly) {
    products = products.filter((product) => product.stocked);
  }
  const categories = new Set(products.map((product) => product.category));
  const categoryComponents = [];

  categories.forEach((c) =>
    categoryComponents.push(
      <ProductCategory
        category={c}
        products={products}
        search={search}
        key={c}
      />
    )
  );

  return (
    <>
      <label>Products</label>
      <br />
      {categoryComponents}
    </>
  );
}

export default ProductTable;
