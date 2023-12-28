import { createStore } from "solid-js/store";

let todoId = 1;
let sectionId = 0;

export interface TodoData {
  id: number;
  name: string;
  section: number;
  done: boolean;
}

const [todoList, setTodoList] = createStore([
  { id: 0, name: "Welcome Solid-Todo.", section: 0, done: false } as TodoData,
  { id: 1, name: "Have a good day!", section: 0, done: false },
]);

export interface SectionData {
  id: number;
  name: string;
}

const [sectionList, setSectionList] = createStore([
  { id: 0, name: "Work" } as SectionData,
]);

const addTodo = (sectionId: number) => {
  setTodoList((list) => [
    ...list,
    { id: ++todoId, name: "New", section: sectionId, done: false },
  ]);
};

const checkTodo = (id: number, checked: boolean) => {
  setTodoList((todo) => todo.id === id, "done", checked);
};

const deleteTodo = (id: number) => {
  setTodoList((list) => list.filter((todo) => todo.id !== id));
};

const changeTodoName = (id: number, name: string) => {
  if (name.trim() === "") return;
  setTodoList((todo) => todo.id === id, "name", name);
};

const addSection = () => {
  setSectionList((list) => [...list, { id: ++sectionId, name: "New Section" }]);
};

const deleteSection = (id: number) => {
  setTodoList((list) => list.filter((todo) => todo.section !== id));
  setSectionList((list) => list.filter((section) => section.id !== id));
};

const changeSectionName = (id: number, name: string) => {
  if (name.trim() === "") return;
  setSectionList((section) => section.id === id, "name", name);
};

export const STORE = {
  todoList,
  setTodoList,
  sectionList,
  setSectionList,
  addTodo,
  checkTodo,
  deleteTodo,
  changeTodoName,
  addSection,
  deleteSection,
  changeSectionName,
};
