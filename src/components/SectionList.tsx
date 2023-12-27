// @refresh reload
import { SIZE } from "./Size";
import { COLOR } from "./Theme";
import Section from "./Section";
import { For, JSX } from "solid-js";
import { STORE } from "./Store";

const style_sectionList: JSX.CSSProperties = {
  display: "flex",
  flex: 1,
  "margin-left": `${SIZE.sidePanelW}px`,
  overflow: "scroll",
};

export default function SectionList() {
  let bodyRef;

  return (
    <div style={style_sectionList} ref={bodyRef}>
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
