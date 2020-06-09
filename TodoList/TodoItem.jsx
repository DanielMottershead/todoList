import React from "react";
import { useState } from "react";

import "./todo-item.css";

// Tässä komponentissa majailee yksittäinen listalla oleva
// elementti.
export function TodoItem(props) {
  // Voit toteuttaa tehtävän merkkaamisen
  // tehdyksi esimerkiksi lisäämällä tähän useState-hookin,
  // jossa on done-tieto boolean-arvona

  const [done, setDone] = useState(false);
  const isDone = {
    textDecoration: done ? "line-through" : "none"
  };
  // Alle tuotat yksittäisen listalla olevan elementin renderöinnin.
  // Elementin tiedot tulevat komponenttiin props-muuttujassa.
  return (
    <div className="todo-item" style={isDone} onClick={() => setDone(!done)}>
      <li>{props.item}</li>
    </div>
  );
}
