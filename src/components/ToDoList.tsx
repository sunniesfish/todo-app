import { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const toDoState = atom<IToDo[]>({
    key:"toDo",
    default:[],
});

interface IForm {
    toDo:string;
}

interface IToDo {
    text:string;
    id:number;
    category: "DONE"|"DOING"|"TO_DO";
}

function ToDoList(){
    // const [value, modFn] = useRecoilState(toDoState); // [value, modFn]을 받음. useState과 유사하다. 이렇게 한번에 둘다 받거나 아래처럼 따로 받거나
    const toDos = useRecoilValue(toDoState); //빈 배열 받기
    const setToDos = useSetRecoilState(toDoState) //받은 배열 setter로 수정
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const inValid = ({toDo}:IForm) => {
        console.log("add to do",toDo);
        setToDos(prev => [{text:toDo,id:Date.now(), category:"TO_DO"},...prev])
        setValue("toDo", "");
    }
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form action="" onSubmit={handleSubmit(inValid)}>
                <input 
                    {...register("toDo", {
                        required:"Please write a To Do"
                    })} 
                    type="text" placeholder="Write a to do"/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(todo => <li key={todo.id}>{todo.text}</li>)}
            </ul>
        </div>
    );
}


export default ToDoList;
