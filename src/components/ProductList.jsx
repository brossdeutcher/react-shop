import { useEffect } from "react";

const ProductList = (props) => {

  const productArr = props.productArr.products;
  const setProductArr = props.setProductArr;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProductArr(result);
    };
    getProducts();
  }, []);
  console.log(productArr)

  return (
    <>
      <h1>Product List</h1>
      {productArr.map((product) => {
        return <p id={product.id}>{product.title}</p>
      })}
    </>
  )
}

export default ProductList;