// @refresh reload
import "./app.css";
import { JSX } from "solid-js/jsx-runtime";
import SectionList from "./components/SectionList";
import SidePanel from "./components/SidePanel";
import { SIZE } from "./components/Size";
import { COLOR } from "./components/Theme";

const style: Record<string, JSX.CSSProperties> = {
  main: {
    "background-color": COLOR.black,
  },
  header: {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    width: "100%",
    "min-height": `${SIZE.headerH}px`,
    color: COLOR.white,
  },
  container: {
    display: "flex",
    "flex-direction": "row",
    flex: 1,
    height: 0,
  },
};

export default function App() {
  return (
    <main style={style.main}>
      <div style={style.header}>Solid.js Todo</div>
      <div style={style.container}>
        <SidePanel />
        <SectionList />
      </div>
    </main>
  );
}
