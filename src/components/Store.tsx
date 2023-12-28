import { SetStoreFunction, createStore } from "solid-js/store";

export interface TodoData {
  id: number;
  name: string;
  section: number;
  done: boolean;
}

class TodoList {
  #list: TodoData[];
  #set: SetStoreFunction<TodoData[]>;
  #id: number = 1;

  constructor() {
    [this.#list, this.#set] = createStore([
      {
        id: 0,
        name: "Welcome Solid-Todo.",
        section: 0,
        done: false,
      } as TodoData,
      { id: 1, name: "Have a good day!", section: 0, done: false },
    ]);
  }

  get() {
    return this.#list;
  }

  add(sectionId: number) {
    this.#set((list) => [
      ...list,
      {
        id: ++this.#id,
        name: `New Todo ${this.#id}`,
        section: sectionId,
        done: false,
      },
    ]);
  }

  check(id: number, checked: boolean) {
    this.#set((todo) => todo.id === id, "done", checked);
  }

  delete(id: number) {
    this.#set((list) => list.filter((todo) => todo.id !== id));
  }

  deleteAll(sectionId: number) {
    this.#set((list) => list.filter((todo) => todo.section !== sectionId));
  }

  changeName(id: number, newName: string) {
    if (newName.trim() === "") return;
    this.#set((todo) => todo.id === id, "name", newName);
  }
}

export interface SectionData {
  id: number;
  name: string;
}

class SectionList {
  #list: SectionData[];
  #set: SetStoreFunction<SectionData[]>;
  #id: number = 0;

  constructor() {
    [this.#list, this.#set] = createStore([
      { id: 0, name: "Work" } as SectionData,
    ]);
  }

  get() {
    return this.#list;
  }

  add() {
    this.#set((list) => [
      ...list,
      { id: ++this.#id, name: `New Section ${this.#id}` },
    ]);
  }

  delete(id: number) {
    this.#set((list) => list.filter((section) => section.id !== id));
  }

  changeName(id: number, newName: string) {
    if (newName.trim() === "") return;
    this.#set((section) => section.id === id, "name", newName);
  }
}

export const STORE = {
  todoList: new TodoList(),
  sectionList: new SectionList(),
};
