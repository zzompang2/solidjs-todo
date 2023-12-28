// @refresh reload
import { JSX } from "solid-js/jsx-runtime";
import { For } from "solid-js";
import { SIZE } from "./Size";
import { COLOR } from "./Theme";
import { STORE, SectionData, TodoData } from "./Store";
import Item from "./Item";
import AddButton from "./AddButton";

const style: Record<string, JSX.CSSProperties> = {
  section: {
    "min-width": `${SIZE.sectionW}px`,
    "background-color": COLOR.gray,
    margin: "20px 20px 0 20px",
    padding: "20px",
    "border-radius": "10px",
  },
  header: {
    display: "flex",
    height: `${SIZE.sectionTitleH}px`,
  },
};

interface Props {
  section: SectionData;
  todoList: TodoData[];
}

export default function Section(props: Props) {
  const handleChangeName = (id: number, input: HTMLInputElement) => {
    STORE.changeSectionName(id, input.value);
    // if empty string, rewrite existing name
    input.value = props.section.name;
    input.blur();
  };

  return (
    <div style={style.section}>
      <div style={style.header}>
        <input
          value={props.section.name}
          onchange={(e) => handleChangeName(props.section.id, e.target)}
        />
        <button onclick={() => STORE.deleteSection(props.section.id)}>X</button>
      </div>
      <For each={props.todoList}>{(todo) => <Item todo={todo} />}</For>
      <AddButton sectionId={props.section.id} />
    </div>
  );
}
