import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
    toDo:string;
}

function ToDoList(){
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const onSubmit = (data:IForm) => {
        console.log("add to do",data.toDo);
        setValue("toDo", "");
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register("toDo", {
                        required:"Please write a To Do"
                    })} 
                    type="text" placeholder="Write a to do"/>
                <button>Add</button>
            </form>
        </div>
    );
}


export default ToDoList;