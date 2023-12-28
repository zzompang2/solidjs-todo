// @refresh reload
import { For, JSX } from "solid-js";
import { SIZE } from "./Size";
import { STORE } from "./Store";
import Section from "./Section";

const style: Record<string, JSX.CSSProperties> = {
  sectionList: {
    display: "flex",
    flex: 1,
    height: "100%",
    "overflow-x": "scroll",
  },
  button: {
    height: "100%",
    width: `${SIZE.sectionW / 2}px`,
    padding: "0 20px",
    margin: "0 20px",
    "font-size": "20px",
  },
};

export default function SectionList() {
  return (
    <div style={style.sectionList}>
      <For each={STORE.sectionList.get()}>
        {(section) => (
          <Section
            section={section}
            todoList={STORE.todoList
              .get()
              .filter((todo) => todo.section === section.id)}
          />
        )}
      </For>
      <button style={style.button} onclick={() => STORE.sectionList.add()}>
        +section
      </button>
    </div>
  );
}
