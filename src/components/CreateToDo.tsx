import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, categoryState, toDoState } from "../atoms";
import styled from "styled-components";

interface IForm {
    toDo:string;
    category:string;
}

const Input = styled.input`
    height: 30px;
    background-color: transparent;
    color: ${props => props.theme.textColor};
    border: 2px solid ${props => props.theme.innerColor};
    border-radius: 5px;
    margin: 5px;
    &::placeholder{
        color: ${props => props.theme.textColor};
        text-align: center;
    }
    &:first-child{
        width: 80px;
    }
    &:nth-child(2) {
        width: 300px;
    }
`
const AddBtn = styled.button`
    height: 30px;
    background-color: ${props => props.theme.accentColor};
    border: 2px solid ${props => props.theme.accentColor};
    border-radius: 5px;
    color: ${props => props.theme.innerColor};
    font-size: 18px;
`

function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const setCategories = useSetRecoilState(categoriesState)
    const {handleSubmit, register, setValue} = useForm<IForm>();
    const inValid = ({toDo,category:cate}:IForm) => {
        setToDos((prev) => {
            const tempCate = cate.trim()? cate : category;
            const temp = [{text: toDo, id: Date.now(), category:tempCate},...prev,]
            localStorage.setItem("TODO",JSON.stringify(temp))
            return temp;
        });
        setCategories(prev=> prev.includes(cate.trim())||!cate.trim()? prev : [...prev, cate]);
        setValue("toDo", "");
        setValue("category","");
    }
    return (
        <form onSubmit={handleSubmit(inValid)}>
            <Input 
                {...register("category")} 
                placeholder="Category?"/>
            <Input 
                {...register("toDo", {
                    required:"Please write a To Do"
                })} 
                type="text" placeholder="Write a to do"/>
            <AddBtn>Add</AddBtn>
        </form>
    );
}

export default CreateToDo;