import Card from "./Card";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Card />
      <Card />
      <Card />
    </div>
  );
}
