import { atom, selector } from "recoil";

let storage = localStorage.getItem("TODO");
let toDoStorage = storage? JSON.parse(storage) : []

export enum Categories {
    "TO_DO" = "To Do",
    "DOING" = "Doing",
    "DONE" = "Done",
}
export interface IToDo {
    text:string;
    id:number;
    category: string;
}


export const categoriesState = atom<string[]>({
    key:"categories",
    default:[Categories.TO_DO, Categories.DOING, Categories.DONE],
})

export const categoryState =atom<string>({
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