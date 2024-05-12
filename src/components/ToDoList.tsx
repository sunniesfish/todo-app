import {  useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";






function ToDoList(){
    // const [value, modFn] = useRecoilState(toDoState); // [value, modFn]을 받음. useState과 유사하다. 이렇게 한번에 둘다 받거나 아래처럼 따로 받거나
    const toDos = useRecoilValue(toDoState); //빈 배열 받기

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
                <CreateToDo/>
            <ul>
                {toDos.map(todo => <ToDo key={todo.id} {...todo}/>)}
            </ul>
        </div>
    );
}


export default ToDoList;
