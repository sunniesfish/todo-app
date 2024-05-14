import {  useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoriesState, categoryState, toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";






function ToDoList(){
    // const [value, modFn] = useRecoilState(toDoState); // [value, modFn]을 받음. useState과 유사하다. 이렇게 한번에 둘다 받거나 아래처럼 따로 받거나
    const toDos = useRecoilValue(toDoSelector); //빈 배열 받기
    const [category, setCategory] = useRecoilState(categoryState);
    const categories = useRecoilValue(categoriesState);
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }
    console.log(categories)
    return (
        <>
            <div>
                <h1>To Dos</h1>
                <hr />
                    <select onInput={onInput} value={category}>
                        {categories.map((item,index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
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
