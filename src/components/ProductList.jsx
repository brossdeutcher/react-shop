import { useEffect } from "react";

const ProductList = (props) => {

  const productArr = props.productArr.products;
  const setProductArr = props.setProductArr;
  const setProductId = props.setProductId;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProductArr(result);
    };
    getProducts();
  }, []);


  return (
    <>
      <h1>Product List</h1>
      {productArr?.map((product) => {
        return <p id={product.id} onClick={() => setProductId(product.id)}>{product.title}</p>
      })}
    </>
  )
}

export default ProductList;