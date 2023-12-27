import { STORE } from "./Store";

// @refresh reload
export default function AddButton(props) {
  return <button onclick={() => STORE.addTodo(props.sectionId)}>+</button>;
}
