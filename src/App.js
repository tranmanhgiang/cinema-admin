import React from "react";
import "./App.css";
import { RouterConfig } from "./router/RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <RouterConfig />
            </div>
        </Router>
    );
}

export default App;
