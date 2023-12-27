// @refresh reload
import { JSX } from "solid-js/jsx-runtime";
import { SIZE } from "./Size";
import { COLOR } from "./Theme";
import { For } from "solid-js";
import Item from "./Item";
import { STORE } from "./Store";
import AddButton from "./AddButton";

const style_section: JSX.CSSProperties = {
  "min-width": `${SIZE.sectionW}px`,
  "background-color": COLOR.gray,
  margin: "20px 20px 0 20px",
  padding: "20px",
  "border-radius": "10px",
};

const style_header: JSX.CSSProperties = {
  display: "flex",
  height: `${SIZE.sectionTitleH}px`,
};

export default function Section(props) {
  return (
    <div style={style_section}>
      <div style={style_header}>
        <input
          value={props.section.title}
          onchange={(e) => {
            STORE.changeSectionName(props.section.id, e.target.value);
            e.target.value = props.section.title;
            e.target.blur();
          }}
        />
        <button onclick={() => STORE.deleteSection(props.section.id)}>X</button>
      </div>
      <For each={props.todoList}>{(todo) => <Item todo={todo} />}</For>
      <AddButton sectionId={props.section.id} />
    </div>
  );
}
