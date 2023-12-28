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
    display: "flex",
    "flex-direction": "column",
    "min-width": `${SIZE.sectionW}px`,
    height: "100%",
    "margin-left": "20px",
    "padding-top": "20px",
    "border-radius": "10px 10px 0 0",
    "background-color": COLOR.gray,
  },
  header: {
    display: "flex",
    "align-items": "center",
    height: `${SIZE.sectionTitleH}px`,
    padding: "0 20px",
  },
  title: {
    "font-size": "20px",
    flex: 1,
  },
  button: {
    width: "40px",
    height: "40px",
    "border-radius": "10px",
  },
  scroll: {
    flex: 1,
    "overflow-y": "scroll",
    padding: "20px",
  },
};

interface Props {
  section: SectionData;
  todoList: TodoData[];
}

export default function Section(props: Props) {
  const handleChangeName = (id: number, input: HTMLInputElement) => {
    STORE.sectionList.changeName(id, input.value);
    // if empty string, rewrite existing name
    input.value = props.section.name;
    input.blur();
  };

  return (
    <div style={style.section}>
      <div style={style.header}>
        <input
          style={style.title}
          value={props.section.name}
          onchange={(e) => handleChangeName(props.section.id, e.target)}
        />
        <button
          style={style.button}
          onclick={() => {
            STORE.todoList.deleteAll(props.section.id);
            STORE.sectionList.delete(props.section.id);
          }}
        >
          X
        </button>
      </div>
      <div style={style.scroll}>
        <For each={props.todoList}>
          {(todo) => <Item todo={todo} type="edit" />}
        </For>
        <AddButton sectionId={props.section.id} />
      </div>
    </div>
  );
}
