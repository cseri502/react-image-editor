import { useEffect } from "react";

import Title from "./components/Title";
import Filters from "./components/Filters";
import Preview from "./components/Preview";

function App() {
  useEffect(() => {
    document.title = "React Image Editor";
  }, []);

  return (
    <div className="h-screen w-full grid place-items-center bg-blue-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-600 shadow-md rounded-sm">
        <Title text="Image Editor" />
        <div className="flex flex-row justify-between items-center">
          <Filters />
          <Preview />
        </div>
      </div>
    </div>
  );
}

export default App;
