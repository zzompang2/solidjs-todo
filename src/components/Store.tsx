import { createStore } from "solid-js/store";

let todoId = 2;
let sectionId = 2;

const [todoList, setTodoList] = createStore([
  { id: 0, work: "Excercies", section: 1, done: false },
  { id: 1, work: "Sleep", section: 2, done: true },
  { id: 2, work: "Cooking", section: 2, done: false },
]);

const [sectionList, setSectionList] = createStore([
  { id: 0, title: "Work" },
  { id: 1, title: "Hobby" },
  { id: 2, title: "Home" },
]);

const addTodo = (sectionId: number) => {
  setTodoList((list) => [
    ...list,
    { id: ++todoId, work: "New", section: sectionId, done: false },
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
  setTodoList((todo) => todo.id === id, "work", name);
};

const addSection = () => {
  setSectionList((list) => [
    ...list,
    { id: ++sectionId, title: "New Section" },
  ]);
};

const deleteSection = (id: number) => {
  setTodoList((list) => list.filter((todo) => todo.section !== id));
  setSectionList((list) => list.filter((section) => section.id !== id));
};

const changeSectionName = (id: number, name: string) => {
  if (name.trim() === "") return;
  setSectionList((section) => section.id === id, "title", name);
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
