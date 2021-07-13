import "./App.css";
import ContextFun from "./components/global/ContextProvider";
import { Switch, Route } from "react-router-dom";
import ContactTable from "./components/contact/contacTable";

function App() {
  return (
    <div className='App'>
      <ContextFun>
        <Switch>
          <Route exact path='/' component={ContactTable} />
        </Switch>
      </ContextFun>
    </div>
  );
}

export default App;
