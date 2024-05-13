import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo:string;
}


function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {handleSubmit, register, setValue} = useForm<IForm>();
    const inValid = ({toDo}:IForm) => {
        setToDos((prev) => [
            { text: toDo, id: Date.now(), category},
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