import { useState, useEffect } from "react";

export const Contries = () => {
  const [contries, setContries] = useState([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "contries";

  const getContries = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setContries(data);
  };

  useEffect(() => {
    getContries();
  }, []);

  return (
    <div>
      <ul>
        <h1>Paices </h1>
        {contries.map((item) => (
          <li key={item.id}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
