import "./sass/index.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import About from "./components/About";
import Profile from "./components/Profile";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Post from "./components/Post";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <button
          onClick={() => {
            setLogin(!login);
          }}
        >
          {login ? "logout" : "login"}
        </button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/about" component={About} />
          <Route path="/profile">
            <Profile login={login} />
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
