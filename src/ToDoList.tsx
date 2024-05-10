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
interface IForm{
    email:string;
    firstName:string;
    lastName:string;
    username:string;
    password:string;
    password1:string;
}

function ToDoList() {
    const { 
        register, 
        handleSubmit, 
        formState:{errors}, 
    } = useForm<IForm>({
            defaultValues:{
                email:"@naver.com"
            }
        });
    
    const onValid = (data:IForm) => {
        console.log(data);
    }
    console.log(errors);
    return (
        <div>
             <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
                >
                <input {...register("email", { required: "Email is required", pattern:{
                    value:/^[A-Za-z0-9._%+-]+@naver.com/,
                    message:"Only naver.com emails allowed",
                } })} placeholder="Email" />
                <span>{errors?.email?.message}</span>

                <input
                    {...register("firstName", { required: true })}
                    placeholder="First Name"
                />
                <span>{errors?.firstName?.message}</span>

                <input
                    {...register("lastName", { required: true })}
                    placeholder="Last Name"
                />
                <span>{errors?.lastName?.message}</span>

                <input
                    {...register("username", { required: true, minLength: 10 })}
                    placeholder="Username"
                />
                <span>{errors?.username?.message}</span>

                <input
                    {...register("password", { required: true, minLength: 5 })}
                    placeholder="Password"
                />
                <span>{errors?.password?.message}</span>

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
                <span>{errors?.password1?.message}</span>

                <button>Add</button>
                {}
            </form>
        </div>
    );
}

export default ToDoList;