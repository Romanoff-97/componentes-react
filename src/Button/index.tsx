import type {JSX} from "react";

export default function Button(): JSX.Element {
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#000",
        color: "white",
        border: "none",
        borderRadius: "7px",
        cursor: "pointer",
        fontSize: "16px",
        alignSelf: "flex-end",
      }}
    >
      Comprar agora
    </button>
  );
}
