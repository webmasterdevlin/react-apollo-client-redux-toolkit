import React, { useState } from "react";
import "./App.css";
import Todo from "./todo/components/Todo";
import { Button, Container } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import {
    FetchTodoList,
    FetchTodoList_todoList,
} from "./todo/operations/queries/__generated__/FetchTodoList";
import { FETCH_TODO_LIST } from "./todo/operations/queries";
import NavigationBar from "./shared/components/navigation-bar";
import TodoFormDialog from "./todo/components/todo-form-dialog";

function App() {
    const [selectedTodoList, setSelectedTodoList] = useState<FetchTodoList_todoList>();

    const { loading, data, error } = useQuery<FetchTodoList>(FETCH_TODO_LIST, {
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
    });

    if (loading) return <p>loading...</p>;

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

    return (
        <>
            <NavigationBar />
            <Container>
                <div style={{ marginBottom: "4rem" }}>
                    {data?.todoList.map((t) => (
                        <>
                            <Button
                                variant={"contained"}
                                color={selectedTodoList?.id === t.id ? "primary" : "default"}
                                onClick={() => setSelectedTodoList(t)}
                            >
                                {t.title}
                            </Button>
                        </>
                    ))}
                </div>
                <TodoFormDialog todoList={selectedTodoList} />
                <Todo />
            </Container>
        </>
    );
}

export default App;
