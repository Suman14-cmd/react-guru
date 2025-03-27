import { useEffect, useState } from "react";
const App = () => {

const [products, setProducts] = useState([])

useEffect(() => {
  fetch(process.env.PUBLIC_URL + "/data.json")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Fetching data error:", error));
}, []);


const totalProducts = products.reduce((acc, product) => acc + product.price, 0);
// const conditionProd = products.filter((product) => product.price > 100)

  return (
    <>
    <h1>Products List</h1>
    <ul>
    {products.map((product) => (
      <li key={product.id}>
        {product.name} - ${product.price}
      </li>
    ))}
    </ul>
    ${totalProducts}
    </>
  )
}
export default App;