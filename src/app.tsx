// @refresh reload
import "./app.css";
import { JSX } from "solid-js/jsx-runtime";
import SectionList from "./components/SectionList";
import SidePanel from "./components/SidePanel";
import { SIZE } from "./components/Size";
import { COLOR } from "./components/Theme";

const style_header: JSX.CSSProperties = {
  display: "flex",
  position: "fixed",
  "align-items": "center",
  "justify-content": "center",
  width: "100%",
  height: `${SIZE.headerH}px`,
  color: COLOR.white,
};

export default function App() {
  return (
    <main style={{ "background-color": COLOR.black }}>
      <div style={style_header}>Solid.js Todo</div>
      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          flex: 1,
          "margin-top": `${SIZE.headerH}px`,
        }}
      >
        <SidePanel />
        <SectionList />
      </div>
    </main>
  );
}
