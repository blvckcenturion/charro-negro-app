import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Articles from "./pages/Articles";

function App() {

  return (
      <Router>
        <Switch>
          <Route path="/" component={Index} exact/>
          <Route path="/about" component={About}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/articles" component={ Articles}/>
        </Switch>
      </Router>
  );
}

export default App;
