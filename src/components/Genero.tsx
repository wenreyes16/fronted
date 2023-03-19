import { useState, useEffect } from "react";

export const Genero = () => {
  const [genero, setGenero] = useState<any>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "genero";

  const getGenero = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setGenero(data);
  };

  useEffect(() => {
    getGenero();
  }, []);

  return (
    <div>
      <ul>
        <h1>Generos </h1>
        {genero.map((item) => (
          <li key={item.id}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
