import React from "react";
import "./App.css";
import Todo from "./todo/components/Todo";
import { Container } from "@material-ui/core";

function App() {
    return (
        <Container>
            <Todo />
        </Container>
    );
}

export default App;
