import { useRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({text, category}:IToDo){
    const setToDos = useRecoilState(toDoState);
    const onClick = (cat:IToDo["category"]) => {
        
    }
    return (
        <li >
            <span>{text}</span>
            {category !== "DOING" && (<button onClick={()=>onClick("DOING")}>Donig</button>)}
            {category !== "TO_DO" && (<button onClick={()=>onClick("TO_DO")}>To Do</button>)}
            {category !== "DONE" && (<button onClick={()=>onClick("DONE")}>Done</button>)}
        </li>
    );
}

export default ToDo;