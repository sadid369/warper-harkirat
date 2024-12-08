import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  // const [todos, setTodos] = useState([]);
  const [todoNumber, setTodoNumber] = useState(1);

  useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((res) => res.json())
    //     .then((data) => setTodos(data));
    console.log("called");
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((res) => setTodos(res.data));
  }, []);
  return (
    <>
      {/* {todos.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })} */}
      {/* {todos.title} */}
      <button onClick={() => setTodoNumber(2)}>1</button>
      <button onClick={() => setTodoNumber(3)}>2</button>
      <button onClick={() => setTodoNumber(4)}>3</button>
      <button onClick={() => setTodoNumber(5)}>4</button>
      <Todos id={todoNumber} />
    </>
  );
}
function Todos({ id }) {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setTodos(res.data));
  }, [id]);
  return <>{todos.title}</>;
}

export default App;
