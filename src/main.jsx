import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <TaskContextProvider>
            <App />
        </TaskContextProvider>
    </React.StrictMode>
);
