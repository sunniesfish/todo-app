import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, categoryState, toDoState } from "../atoms";

interface IForm {
    toDo:string;
    category:string;
}


function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const setCategories = useSetRecoilState(categoriesState)
    const {handleSubmit, register, setValue} = useForm<IForm>();
    const inValid = ({toDo,category:cate}:IForm) => {
        setToDos((prev) => {
            const tempCate = cate? cate : category;
            const temp = [{text: toDo, id: Date.now(), category:tempCate},...prev,]
            console.log(temp);
            localStorage.setItem("TODO",JSON.stringify(temp))
            return temp;
        });
        setCategories(prev=> prev.includes(cate)||!cate? prev : [...prev, cate]);
        setValue("toDo", "");
        setValue("category","");
    }
    return (
        <form onSubmit={handleSubmit(inValid)}>
            <input 
                {...register("category")} 
                placeholder="Category?"/>
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