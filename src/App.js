import "./App.css";
import ContextFun from "./components/global/ContextProvider";
import ContactRegister from "./components/contactRegister";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <ContextFun>
        <Switch>
          <Route exact path='/' component={ContactRegister} />
        </Switch>
      </ContextFun>
    </div>
  );
}

export default App;
