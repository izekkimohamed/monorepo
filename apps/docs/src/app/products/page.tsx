import { getProduct } from "../actions/getProduct";

async function Products() {
  const data = await getProduct("30040892");
  console.log(data.product);
  return <div>Products</div>;
}

export default Products;
