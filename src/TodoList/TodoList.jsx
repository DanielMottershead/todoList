import React from "react";
import { TodoItem } from "./TodoItem.jsx";

// Tuo tähän elementtiin propsina todo-listasi elementit.
// Tuota lista divin sisälle listan map-funktiolla. Jokainen
// listan elementti on TodoItem-komponentti, joka löytyy
// TodoItem.jsx-tiedostosta.
export default function(props) {
  return (
    <div>
      <ul>
        {props.listItems.map((value, index) => (
          <TodoItem key={value} index={index} item={value} />
        ))}
      </ul>
    </div>
  );
}
