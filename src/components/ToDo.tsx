import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, categoriesState, toDoState } from "../atoms";
import styled from "styled-components";

const TodoList = styled.div`
    margin: 15px;
    width: 100%;
    min-width: 300px;
    color: ${props => props.theme.textColor};
    display: flex;
`
const SelectCategory = styled.select`
    display: inline-block;
    background-color: transparent;
    position: relative;
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 5px;
    height: 25px;
    width: 60px;
    margin-right: 15px;
    text-align: center;
    color: ${props => props.theme.textColor};
    option{
        color: ${props => props.theme.accentColor};
    }
`
const TextBox = styled.div`
    padding-top: 5px;
    max-width: 300px;
    height: 100%;
`
const DeleteBtn = styled.button`
    position: absolute;
    right: 80px;
    background-color: ${props => props.theme.accentColor};
    color: ${props => props.theme.textColor};
    height: 25px;
    border: none;
    border-radius: 5px;
    box-shadow: none;
    cursor: pointer;
`

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
    const onDelete = () => {
        setToDos(prev => {
            const tempToDos = prev.filter(item => item.id !== id )
            localStorage.setItem("TODO",JSON.stringify(tempToDos))
            return tempToDos;
        })
    }
    return (
        <TodoList className="todo-item">
            <SelectCategory value={category} onInput={onInput}>
                {categories.filter(item => item !== category).map((item,index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </SelectCategory>
            <TextBox>
                {text}
            </TextBox>
            <DeleteBtn onClick={onDelete}>Delete</DeleteBtn>
        </TodoList>
    );
}

export default ToDo;