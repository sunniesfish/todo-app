import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";



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
            {category !== Categories.DOING && (<button name={Categories.DOING} onClick={onClick}>Donig</button>)}
            {category !== Categories.TO_DO && (<button name={Categories.TO_DO} onClick={onClick}>To Do</button>)}
            {category !== Categories.DONE && (<button name={Categories.DONE} onClick={onClick}>Done</button>)}
        </li>
    );
}

export default ToDo;