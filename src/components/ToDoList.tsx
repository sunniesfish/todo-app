import {  useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { IToDo, categoryState, toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";






function ToDoList(){
    // const [value, modFn] = useRecoilState(toDoState); // [value, modFn]을 받음. useState과 유사하다. 이렇게 한번에 둘다 받거나 아래처럼 따로 받거나
    const toDos = useRecoilValue(toDoState); //빈 배열 받기
    const [toDo, doings, dones] = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState)
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    }
    return (
        <>
            <div>
                <h1>To Dos</h1>
                <hr />
                    <select onInput={onInput}>
                        <option value="TO_DO">To Do</option>
                        <option value="DOING">Doing</option>
                        <option value="DONE">Done</option>
                    </select>
                    <CreateToDo/>
                    {toDos.map( todo => (
                        <ToDo key={todo.id} {...todo}/>
                    ))}
            </div>
        </>
    );
}


export default ToDoList;
