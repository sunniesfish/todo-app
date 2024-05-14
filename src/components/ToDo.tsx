import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, categoriesState, toDoState } from "../atoms";



function ToDo({text, category, id}:IToDo){
    const setToDos = useSetRecoilState (toDoState);
    const categories = useRecoilValue(categoriesState);
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        const { currentTarget:{value}} = event;
        setToDos(prev => { //recoil을 통해 todo배열의 state를 세팅가능
            const targetIndex = prev.findIndex((todo)=>todo.id === id)      
            const newTODo = {text, id, category:value as any}
            return [...prev.slice(0,targetIndex),newTODo,...prev.slice(targetIndex+1)]; 
        })
    }
    return (
        <li >
            <span>{text}</span>
            <select value={category} onInput={onInput}>
                {categories.filter(item => item !== category).map((item,index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </li>
    );
}

export default ToDo;