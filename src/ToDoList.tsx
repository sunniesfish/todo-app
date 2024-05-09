import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList(){
//     const [todo, setTodo] = useState("");
//     const [todoError,SetTodoError] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {currentTarget:{value}} = event;
//         SetTodoError("");
//         setTodo(value);
//     }
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if(todo.length<10){
//             return SetTodoError("To do should be longer");
//         }
//         console.log(todo)
//         setTodo("");
//     }


//     return (
//         <div>
//             <form action="" onSubmit={onSubmit}>
//                 <input type="text" onChange={onChange} value={todo} placeholder="Write a to do"/>
//                 <button>Add</button>
//                 {todoError !== "" ? todoError : null}
//             </form>
//         </div>
//     );
// }

function ToDoList() {
    const { register, watch } = useForm();
    

    console.log(watch())
    return (
        <div>
            <form >
                <input {...register("todo")} placeholder="Write a to do"/>
                <button>Add</button>
                {}
            </form>
        </div>
    );
}

export default ToDoList;