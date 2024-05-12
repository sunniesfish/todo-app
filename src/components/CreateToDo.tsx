import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
    toDo:string;
}


function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const {handleSubmit, register, setValue} = useForm<IForm>();
    const inValid = ({toDo}:IForm) => {
        setToDos((prev) => [
            { text: toDo, id: Date.now(), category: "TO_DO"},
            ...prev,
        ]);
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