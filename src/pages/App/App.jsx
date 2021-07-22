import logo from "./logo.svg";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Puppies from "../Puppies/Puppies";
import NewPuppyPage from "../NewPuppyPage/NewPuppyPage";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {user ? (
        <>
          <Switch>
            <Route path="/puppies/new">
              <Puppies />
            </Route>
            <Route path="/puppies">
              <NewPuppyPage />
            </Route>
            <Redirect to="/orders" />
          </Switch>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
