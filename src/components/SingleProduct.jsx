import { useEffect, useState } from "react";

const SingleProduct = (props) => {
  
  const productId = props.productId;
  const setProductId = props.setProductId;
  console.log(props);
  console.log(setProductId);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const getSingleProduct = async (id) => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await response.json();
      setSingleProduct(result);
      console.log(singleProduct);
      console.log('getSingleProduct>> ', id);
    }
    getSingleProduct(productId);
  }, [productId]);

  return (
    <>
      <h1>{singleProduct.title}</h1>
      <p>{productId}</p>
      <table>
        <tr>
          <td>Brand:</td>
          <td>{singleProduct.brand}</td>
        </tr>
        <tr>
          <td>Category:</td>
          <td>{singleProduct.category}</td>
        </tr>
        <tr>
          <td>Price:</td>
          <td>${singleProduct.price}</td>
        </tr>
      </table>
      <button onClick={() => setProductId(null)}>Back to List</button>
    </>
  )
}

export default SingleProduct;