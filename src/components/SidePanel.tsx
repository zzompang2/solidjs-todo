// @refresh reload
import { SIZE } from "./Size";
import { COLOR } from "./Theme";
import { STORE } from "./Store";
import { For, JSX } from "solid-js";
import Item from "./Item";

const style_panel: JSX.CSSProperties = {
  display: "flex",
  "flex-direction": "column",
  position: "fixed",
  width: `${SIZE.sidePanelW}px`,
  height: "100%",
  "background-color": COLOR.black,
};

const style_container: JSX.CSSProperties = {
  flex: 1,
  padding: "0 20px",
  "overflow-y": "scroll",
};

const style_header: JSX.CSSProperties = {
  "text-align": "center",
  padding: "20px",
  color: COLOR.white,
};

export default function SidePanel() {
  return (
    <div style={style_panel}>
      <div style={style_header}>To-do</div>
      <div style={style_container}>
        <For each={STORE.todoList.filter((todo) => !todo.done)}>
          {(todo) => <Item todo={todo} />}
        </For>
      </div>
      <div
        style={{ width: "100%", height: "2px", "background-color": COLOR.gray }}
      ></div>
      <div style={style_header}>Done</div>
      <div style={style_container}>
        <For each={STORE.todoList.filter((todo) => todo.done)}>
          {(todo) => <Item todo={todo} />}
        </For>
      </div>
    </div>
  );
}
