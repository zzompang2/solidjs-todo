// @refresh reload
import { STORE } from "./Store";

interface Props {
  sectionId: number;
}

export default function AddButton(props: Props) {
  return <button onclick={() => STORE.addTodo(props.sectionId)}>+</button>;
}
