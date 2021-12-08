import "./styles.css";

import AppBar from "./AppBar";
import { Switch, Route } from "react-router-dom";
import TicTactoefinal from "./components/gametictactoe";
import FlipGame from "./FlipGame";
import Demo from "./Demo";
import Demo2 from "./Demo2";
import div1 from "./styles.css";
import Home from "./Home";
export default function App() {
  return (
    <div className={div1}>
      <AppBar />
      <Switch>
        <div className={div1}>
          <Route
            path="/home"
            component={(props) => {
              return <Home />;
            }}
          />
          <Route
            exact
            path="/"
            render={(props) => {
              return <Demo />;
            }}
          />
          <Route
            path="/demo2"
            component={(props) => {
              return <Demo2 />;
            }}
          />
          <Route
            path="/about"
            component={(props) => {
              return <TicTactoefinal />;
            }}
          />
          <Route
            path="/contact"
            component={(props) => {
              return <FlipGame />;
            }}
          />
        </div>
      </Switch>
    </div>
  );
}
