// @refresh reload
import { SIZE } from "./Size";
import { STORE } from "./Store";
import { COLOR } from "./Theme";

const style_item = {
  display: "flex",
  "align-items": "center",
  height: `${SIZE.sidePanelItemH}px`,
  "margin-bottom": "10px",
  padding: "12px",
  color: COLOR.white,
  "background-color": COLOR.black,
};

export default function Item(props) {
  return (
    <label>
      <div style={style_item}>
        <input
          type="checkbox"
          checked={props.todo.done}
          onchange={(e) => STORE.checkTodo(props.todo.id, e.target.checked)}
        ></input>
        <input
          value={props.todo.work}
          onchange={(e) => {
            STORE.changeTodoName(props.todo.id, e.target.value);
            e.target.value = props.todo.work;
            e.target.blur();
          }}
        />
        <button onclick={() => STORE.deleteTodo(props.todo.id)}>X</button>
      </div>
    </label>
  );
}
