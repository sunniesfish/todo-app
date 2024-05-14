import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo:string;
}


function CreateToDo(){
    const [ toDos,setToDos] = useRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {handleSubmit, register, setValue} = useForm<IForm>();
    const inValid = ({toDo}:IForm) => {
        setToDos((prev) => {
            const temp = [{text: toDo, id: Date.now(), category},...prev,]
            localStorage.setItem("TODO",JSON.stringify(temp))
            return temp;
        });
        setValue("toDo", "");
    }
    return (
        <form onSubmit={handleSubmit(inValid)}>
            <input 
                {...register("toDo", {
                    required:"Please write a To Do"
                })} 
                type="text" placeholder="Write a to do"/>
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;