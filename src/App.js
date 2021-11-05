import "./App.css";
import { HashRouter as BrowserRouter, Route, Switch } from "react-router-dom";

import TopNav from "./components/TopNav";
import Homepage from "./pages/Homepage/Homepage";
import Intropage from "./pages/Intropage/Intropage";
import Teampage from "./pages/Teampage/Teampage";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App" style={{ width: "100%", overflow: "hidden" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div id="mainPage">
              <div id="HomeTop">
                <TopNav />
              </div>
              <div id="HomeMain">
                <section id="home">
                  <Homepage />
                </section>
                <section id="intro">
                  <Intropage />
                </section>
                <section id="team">
                  <Teampage />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
