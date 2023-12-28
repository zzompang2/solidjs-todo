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
    position: "fixed",
    "align-items": "center",
    "justify-content": "center",
    width: "100%",
    height: `${SIZE.headerH}px`,
    color: COLOR.white,
  },
  container: {
    display: "flex",
    "flex-direction": "row",
    flex: 1,
    "margin-top": `${SIZE.headerH}px`,
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
