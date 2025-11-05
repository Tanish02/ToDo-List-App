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
        
    )



}

export default TodoApp;


// end code 