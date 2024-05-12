import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";



function ToDo({text, category, id}:IToDo){
    const setToDos = useSetRecoilState (toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget:{name}} = event;
        setToDos(prev => { //recoil을 통해 todo배열의 state를 세팅가능
            const targetIndex = prev.findIndex((todo)=>todo.id === id)      
            const newTODo = {text, id, category:name as any}
            return [...prev.slice(0,targetIndex),newTODo,...prev.slice(targetIndex+1)]; 
        })
    }
    return (
        <li >
            <span>{text}</span>
            {category !== "DOING" && (<button name="DOING" onClick={onClick}>Donig</button>)}
            {category !== "TO_DO" && (<button name="TO_DO" onClick={onClick}>To Do</button>)}
            {category !== "DONE" && (<button name="DONE" onClick={onClick}>Done</button>)}
        </li>
    );
}

export default ToDo;