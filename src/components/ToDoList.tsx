import {  useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoriesState, categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.div`
    margin: 5%;
    text-align: center;
    color: ${props=>props.theme.textColor};
    h1{
        font-size: 30px;
    }
`
const SelectCategory = styled.select`
    display: block;
    background-color: transparent;
    border: 2px solid ${props => props.theme.accentColor};
    border-radius: 5px;
    height: 30px;
    width: 80px;
    margin: 15px;
    text-align: center;
    color: ${props => props.theme.textColor};
    option{
        color: ${props => props.theme.accentColor};
    }
`

const ToDoBox = styled.div`
    width: 80%;
    margin-top: 20px;
`

function ToDoList(){
    // const [value, modFn] = useRecoilState(toDoState); // [value, modFn]을 받음. useState과 유사하다. 이렇게 한번에 둘다 받거나 아래처럼 따로 받거나
    const toDos = useRecoilValue(toDoSelector); //빈 배열 받기
    const [category, setCategory] = useRecoilState(categoryState);
    const categories = useRecoilValue(categoriesState);
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }
    return (
        <>
            <Container>
                <Title>
                    <h1>To Dos</h1>
                </Title>

                    <SelectCategory onInput={onInput} value={category}>
                        {categories.map((item,index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </SelectCategory>
                    <CreateToDo/>
                    <ToDoBox>
                        {toDos.map( todo => (
                            <ToDo key={todo.id} {...todo}/>
                        ))}
                    </ToDoBox>
            </Container>
        </>
    );
}


export default ToDoList;
