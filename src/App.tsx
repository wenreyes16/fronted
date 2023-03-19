import { useEffect, useState } from "react";
import { Categorias } from "./components/Categorias";
import { Genero } from "./components/genero";
import { Contries } from "./components/Contries";
import { Nav } from "./components/nav/Nav";
import { Marca } from "./components/marca";

function App() {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Contries />
      <Genero />
      <Categorias />
      <Marca />
      
    </div>
  );
}

export default App;
