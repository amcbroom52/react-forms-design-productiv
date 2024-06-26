import React from "react";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
import HeaderApp from "./HeaderApp";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const INITIAL_TODOS = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

/** Site application.
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> TodoApp
 **/

function App() {
  return (
    <main className="App">
      <HeaderApp />
      <section className="container mt-4">
        <TodoApp initialTodos={INITIAL_TODOS} />

        <Footer />
      </section>
    </main>
  );
}

export default App;
