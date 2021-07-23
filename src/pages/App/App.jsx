import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Puppies from "../Puppies/Puppies";
import NewPuppyPage from "../NewPuppyPage/NewPuppyPage";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components//NavBar/NavBar.jsx"

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      <NavBar />
      {user ? (
        <>
          <Switch>
            <Route path="/puppies/new">
              <NewPuppyPage />
            </Route>
            <Route path="/puppies">
              <Puppies />
            </Route>
            <Redirect to="/puppies" />
          </Switch>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
