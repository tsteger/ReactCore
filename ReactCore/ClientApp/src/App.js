import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Rubrik } from "./components/header/Rubrik";
import InspectionForm from "./components/inspectionform";
import { FetchVitec } from './components/fetchdata/FetchVitec'
import { FetchMspecs } from './components/fetchdata/FetchMspecs'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <div className="App">
          <Rubrik rubrik="Best&auml;llningsinformation" />
          <InspectionForm />
        </div>
            <Route path="/App" component={App} />
            <Route path="/FetchVitec" component={FetchVitec} />
            <Route path="/FetchMspecs" component={FetchMspecs} />
      </Layout>
    );
  }
}

export default App;
