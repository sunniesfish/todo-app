import { atom, selector } from "recoil";

let storage = localStorage.getItem("TODO");
let toDoStorage = storage? JSON.parse(storage) : []

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}
export interface IToDo {
    text:string;
    id:number;
    category: Categories;
}

export const categoryState =atom<Categories>({
    key:"category",
    default:Categories.TO_DO
})

export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default:toDoStorage,
});


export const toDoSelector = selector({
    key:"toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((todo) => todo.category === category)
    }
})