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
  name: {
    flex: 1,
    "font-size": "16px",
  },
  button: {
    width: "40px",
    height: "40px",
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
        <div style={{ ...style.name, ...style.item, ...style.viewType }}>
          {props.todo.name}
        </div>
      }
    >
      <div class="todo" style={{ ...style.item, ...style.editType }}>
        <label>
          <input
            type="checkbox"
            checked={props.todo.done}
            onchange={(e) =>
              STORE.todoList.check(props.todo.id, e.target.checked)
            }
          />
        </label>
        <input
          style={style.name}
          value={props.todo.name}
          onchange={(e) => handleChangeName(props.todo.id, e.target)}
        />
        <button
          style={style.button}
          onclick={() => STORE.todoList.delete(props.todo.id)}
        >
          X
        </button>
      </div>
    </Show>
  );
}
