import "./App.css";

function App() {
  return (
    //
    <>
      <CardWarper>
        hi There
        <div
          style={{
            border: "2px solid Black",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          hello
        </div>
      </CardWarper>
    </>
  );
}

function CardWarper({ children }) {
  return (
    <div
      style={{
        border: "2px solid Black",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default App;
