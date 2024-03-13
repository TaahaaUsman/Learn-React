import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AddTodo from "./Components/AddTodo";
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="container">
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
      </div>
    </Provider>
  );
}

export default App;
