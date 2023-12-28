// @refresh reload
import { JSX } from "solid-js/jsx-runtime";
import { STORE } from "./Store";
import { SIZE } from "./Size";

const style: Record<string, JSX.CSSProperties> = {
  button: {
    width: "100%",
    height: `${SIZE.sidePanelItemH}px`,
    "font-size": "20px",
    "margin-bottom": "20px",
  },
};

interface Props {
  sectionId: number;
}

export default function AddButton(props: Props) {
  return (
    <button
      class="addButton"
      style={style.button}
      onclick={() => STORE.todoList.add(props.sectionId)}
    >
      +
    </button>
  );
}
