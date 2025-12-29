import { useState } from "react";

function TableMultiplication({ title, desc }) {
  const [nombre, setNombre] = useState(10);
  const [isGenerated, setIsGenerated] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const onClick = () => {
    setIsGenerated(true);
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div>
        <label>Entrez un nombre</label>
        <input
          type="text"
          placeholder="Entrez un nombre"
          value={nombre}
          onChange={(e) => {
            setIsGenerated(false);
            setNombre(e.target.value);
          }}
        />
      </div>
      <button onClick={onClick}>Generer</button>

      {isGenerated && (
        <div>
          <p>Table de {nombre}</p>

          <ul>
            {arr.map((el) => {
              return (
                <li key={el}>
                  {nombre} * {el} = {el * nombre}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TableMultiplication;
