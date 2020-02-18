import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Project from "./components/Project";
import Mayday from "./components/projects/Mayday";
import Development from "./components/Development";
import Workroom8363 from "./components/projects/workroom/Workroom8363";
import PromiseElection from "./components/projects/election/PromiseElection";

export default () => (
  <Router>
    <Header title="KILHYUN.LOG" />
    <Route exact path="/" component={Main} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/project/mayday" component={Mayday} />
    <Route exact path="/project/workroom8363" component={Workroom8363} />
    <Route exact path="/project/election" component={PromiseElection} />
    <Route exact path="/development" component={Development} />
  </Router>
);
