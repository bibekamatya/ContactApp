import "./App.css";
import ContextFun from "./components/global/ContextProvider";
import { Switch, Route } from "react-router-dom";
import ContactRegister from "./components/contact/contactRegister";

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
