import "./App.css";
import User from "./components/User";
import { UserContextProvider } from "./context/apiContext";

function App() {
  return (
    <UserContextProvider >
      <User/>
    </UserContextProvider>
  );
}

export default App;
