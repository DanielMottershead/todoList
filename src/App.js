import React, { useState } from "react";
import "./styles.css";
import TodoList from "./TodoList/TodoList.jsx";
import { AddInput } from "./AddInput/index.jsx";

// Voit käyttää tätä listaa ykköstehtävässä.
// eslint-disable-next-line
const exampleToDoList = [
  "Renderöi lista",
  "Toteuta lisäyskomponentti",
  "Toteuta valmiiksi merkkaaminen",
  "Bonus: järjestettävä lista"
];

export default function App() {
  // Tee tähän reactin tilaan kytkeytyvä useState-hook,
  // joka pitää sisällään Todo-listan elementit.
  // eslint-disable-next-line
  // Tähän kannattaa tehdä kaikki funktiot, joilla listaa
  // muokataan. Esim. listaan lisääminen, listasta poistaminen,
  // listaelementin siirtäminen. Funktiot voi lähettää muille
  // komponenteille propseina.
  const [todos, setTodos] = useState(exampleToDoList);

  function addListItem(addedTodo) {
    if (!todos.includes(addedTodo) && addedTodo !== "") {
      setTodos([...todos, addedTodo]);
    } else {
      alert("Todo already exists");
    }
  }

  return (
    <div className="App">
      <h1>TO-DOH</h1>
      <TodoList listItems={todos} />
      <AddInput addListItem={addListItem} />
    </div>
  );
}
