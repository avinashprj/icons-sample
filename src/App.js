import logo from './logo.svg';
import './App.css';
import { ReactComponent as Bank } from "./icons/bank.svg";
import { ReactComponent as Bell } from "./icons/bell.svg";
import { ReactComponent as Bug } from "./icons/bug.svg";
import { ReactComponent as Api } from "./icons/api.svg";
import { ReactComponent as Build} from "./icons/build.svg";

function App() {
  return (
    <div className="App">
      <Bank className="icon" />
      <Bell className="icon"/>
      <Bug className="icon"/>
      <Api className="icon"/>
      <Build className="icon"/>
    </div>
  );
}

export default App;
