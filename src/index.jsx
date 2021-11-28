import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";
import { DataFetcher } from "./data/dataFetcher";


async function initApp(dataFetcher) {
  const advertisementsList = await dataFetcher.fetchSource();
  console.log("advertisementsList", advertisementsList);

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App advertisementsList={advertisementsList} />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

const DATA_SOURCE = "../data/data.json";
const dataFetcher = new DataFetcher(DATA_SOURCE);

initApp(dataFetcher);

reportWebVitals();
