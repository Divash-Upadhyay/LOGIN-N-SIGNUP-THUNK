import { useState } from "react";
import logo from "./logo.svg";

// import Signup from "./Components/Signup";
import { Login } from "./Components/Login";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
