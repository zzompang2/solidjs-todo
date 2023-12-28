// @refresh reload
import { For, JSX } from "solid-js";
import { SIZE } from "./Size";
import { STORE } from "./Store";
import Section from "./Section";

const style: Record<string, JSX.CSSProperties> = {
  sectionList: {
    display: "flex",
    flex: 1,
    "margin-left": `${SIZE.sidePanelW}px`,
    overflow: "scroll",
  },
};

export default function SectionList() {
  return (
    <div style={style.sectionList}>
      <For each={STORE.sectionList}>
        {(section) => (
          <Section
            section={section}
            todoList={STORE.todoList.filter(
              (todo) => todo.section === section.id
            )}
          />
        )}
      </For>
      <button onclick={() => STORE.addSection()}>+section</button>
    </div>
  );
}
