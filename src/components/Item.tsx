// @refresh reload
import { JSX } from "solid-js/jsx-runtime";
import { SIZE } from "./Size";
import { STORE } from "./Store";
import { COLOR } from "./Theme";
import { TodoData } from "./Store";

const style: Record<string, JSX.CSSProperties> = {
  item: {
    display: "flex",
    "align-items": "center",
    height: `${SIZE.sidePanelItemH}px`,
    "margin-bottom": "10px",
    padding: "12px",
    color: COLOR.white,
    "background-color": COLOR.black,
  },
};

interface Props {
  todo: TodoData;
}

export default function Item(props: Props) {
  const handleChangeName = (id: number, input: HTMLInputElement) => {
    STORE.changeTodoName(id, input.value);
    // if empty string, rewrite existing name
    input.value = props.todo.name;
    input.blur();
  };

  return (
    <label>
      <div style={style.item}>
        <input
          type="checkbox"
          checked={props.todo.done}
          onchange={(e) => STORE.checkTodo(props.todo.id, e.target.checked)}
        ></input>
        <input
          value={props.todo.name}
          onchange={(e) => handleChangeName(props.todo.id, e.target)}
        />
        <button onclick={() => STORE.deleteTodo(props.todo.id)}>X</button>
      </div>
    </label>
  );
}
