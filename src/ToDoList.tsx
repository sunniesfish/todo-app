import { useState } from "react";

function ToDoList(){
    const [todo, setTodo] = useState("");
    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {currentTarget:{value}} = event;
        setTodo(value);
    }
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(todo)
        setTodo("");
    }


    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={todo} placeholder="Write a to do"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;