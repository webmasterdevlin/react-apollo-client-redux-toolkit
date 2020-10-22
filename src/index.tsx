import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";

export const client = new ApolloClient({
    cache,
    uri: "https://free-moth-69.hasura.app/v1/graphql",
    headers: {
        "client-name": "ac3-todos-backend",
        "client-version": "1.0.0",
    },
    connectToDevTools: true,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
