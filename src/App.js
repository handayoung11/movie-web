import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();

    if (toDo === "") {
      return;
    }

    console.log(toDo);
    setToDos((cur) => [toDo, ...cur]);
    setToDo("");
  };
  console.log(toDos);

  return (
    <div>
      <h1>To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={toDo} onChange={onChange} />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
