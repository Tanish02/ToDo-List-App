import { useState } from "react";


function TodoApp() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState(" ");

    function handleAdd() {
        if (input.trim() === "") return;
        setTodos([...todos, input]);
        setInput("");
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>📔Todo List</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a New Task to List"
            />
            <button onClick={handleAdd}>Add</button>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}{""}
                        <button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;


// end code 