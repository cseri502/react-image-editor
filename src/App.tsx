import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React Image Editor";
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold font-inter">Hello world!</h1>
    </>
  );
}

export default App;
