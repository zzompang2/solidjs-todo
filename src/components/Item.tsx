// @refresh reload
import { Show } from "solid-js";
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
  },
  editType: {
    "background-color": COLOR.black,
  },
  viewType: {
    "background-color": COLOR.gray,
  },
};

interface Props {
  todo: TodoData;
  type: "edit" | "view";
}

export default function Item(props: Props) {
  const handleChangeName = (id: number, input: HTMLInputElement) => {
    STORE.todoList.changeName(id, input.value);
    // if empty string, rewrite existing name
    input.value = props.todo.name;
    input.blur();
  };

  return (
    <Show
      when={props.type == "edit"}
      fallback={
        <div style={{ ...style.item, ...style.viewType }}>
          {props.todo.name}
        </div>
      }
    >
      <label>
        <div style={{ ...style.item, ...style.editType }}>
          <input
            type="checkbox"
            checked={props.todo.done}
            onchange={(e) =>
              STORE.todoList.check(props.todo.id, e.target.checked)
            }
          ></input>
          <input
            value={props.todo.name}
            onchange={(e) => handleChangeName(props.todo.id, e.target)}
          />
          <button onclick={() => STORE.todoList.delete(props.todo.id)}>
            X
          </button>
        </div>
      </label>
    </Show>
  );
}
