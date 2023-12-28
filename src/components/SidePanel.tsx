// @refresh reload
import { For, JSX } from "solid-js";
import { SIZE } from "./Size";
import { COLOR } from "./Theme";
import { STORE } from "./Store";
import Item from "./Item";

const style: Record<string, JSX.CSSProperties> = {
  panel: {
    display: "flex",
    "flex-direction": "column",
    width: `${SIZE.sidePanelW}px`,
    height: "100%",
    "background-color": COLOR.black,
  },
  container: {
    flex: 1,
    padding: "0 20px",
    "overflow-y": "scroll",
  },

  header: {
    "text-align": "center",
    padding: "20px",
    color: COLOR.white,
  },
  divider: {
    width: "100%",
    height: "2px",
    "background-color": COLOR.gray,
  },
};

export default function SidePanel() {
  return (
    <div style={style.panel}>
      <div style={style.header}>To-do</div>
      <div style={style.container}>
        <For each={STORE.todoList.get().filter((todo) => !todo.done)}>
          {(todo) => <Item todo={todo} type="view" />}
        </For>
      </div>
      <div style={style.divider}></div>
      <div style={style.header}>Done</div>
      <div style={style.container}>
        <For each={STORE.todoList.get().filter((todo) => todo.done)}>
          {(todo) => <Item todo={todo} type="view" />}
        </For>
      </div>
    </div>
  );
}
