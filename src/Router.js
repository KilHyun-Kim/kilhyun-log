import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Project from "./components/Project";
import Mayday from "./components/projects/mayday/Mayday";
import Development from "./components/Development";
import Workroom8363 from "./components/projects/workroom/Workroom8363";
import PromiseElection from "./components/projects/election/PromiseElection";
import JavascriptPageList from "./components/development/javascript/JavascriptPageList";
import js1 from "./components/development/javascript/Js1";
import TypescriptPageList from "./components/development/typescript/TypescriptPageList";
import ReactPageList from "./components/development/react/ReactPageList";
import Ts1 from "./components/development/typescript/Ts1";
import TravelPage from "./components/travel/TravelPage";
import KokiPage from "./components/travel/KokiPage";
import TravelPageList from "./components/travel/TravelPageList";
export default () => (
  <Router>
    <Header title="KILHYUN.LOG" />
    <Route exact path="/" component={Main} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/project/mayday" component={Mayday} />
    <Route exact path="/project/workroom8363" component={Workroom8363} />
    <Route exact path="/project/election" component={PromiseElection} />
    <Route exact path="/development" component={Development} />
    <Route
      exact
      path="/development/javascript"
      component={JavascriptPageList}
    />
    <Route exact path="/development/javascript/1" component={js1} />
    <Route
      exact
      path="/development/typescript"
      component={TypescriptPageList}
    />
    <Route exact path="/development/typescript/1" component={Ts1} />
    <Route exact path="/development/react" component={ReactPageList} />

    <Route exact path="/travel" component={TravelPageList} />
    <Route exact path="/travel/koki" component={KokiPage} />
  </Router>
);