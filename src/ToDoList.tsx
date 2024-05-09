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
    const { register, watch, handleSubmit, formState } = useForm();
    
    const onValid = (data:any) => {
    }
    console.log(formState.errors);
    return (
        <div>
             <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
                >
                <input {...register("email", { required: true })} placeholder="Email" />
                <input
                    {...register("firstName", { required: true })}
                    placeholder="First Name"
                />
                <input
                    {...register("lastName", { required: true })}
                    placeholder="Last Name"
                />
                <input
                    {...register("username", { required: true, minLength: 10 })}
                    placeholder="Username"
                />
                <input
                    {...register("password", { required: true, minLength: 5 })}
                    placeholder="Password"
                />
                <input
                    {...register("password1", {
                    required: "Password is required",
                    minLength: {
                        value: 5,
                        message: "Your password is too short.",
                    },
                    })}
                    placeholder="Password1"
                />
                <button>Add</button>
                {}
            </form>
        </div>
    );
}

export default ToDoList;