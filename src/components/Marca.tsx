import { useState, useEffect } from "react";

export const Marca = () => {
  const [marca, setMarca] = useState<any>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "marca";

  const getMarca = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setMarca(data);
  };

  useEffect(() => {
    getMarca();
  }, []);

  return (
    <div>
      <ul>
        <h1>Marcas </h1>
        {marca.map((item) => (
          <li key={item.id}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
