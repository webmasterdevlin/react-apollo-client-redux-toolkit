import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_TODO_LIST } from "../operations/queries";
import { FetchTodoList } from "../operations/queries/__generated__/FetchTodoList";
import { Card, CardContent, Paper } from "@material-ui/core";

const Todo = () => {
    const { loading, data, error } = useQuery<FetchTodoList>(FETCH_TODO_LIST, {
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
    });

    if (loading) return <p>loading...</p>;

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

    return (
        <div>
            <h1>Todo</h1>
            <p>This is a complex todo list component.</p>
            <div>
                {data?.todoList?.map((t) => (
                    <Card style={{ marginBottom: "4rem" }}>
                        <CardContent>
                            <h3>todoList id:{t.id}</h3>
                            <h3>todoList: title{t.title}</h3>
                            <>
                                {t.items.map((i) => (
                                    <>
                                        <h5>todoItem id:{i.id}</h5>
                                        <h5>todoItem title:{i.title}</h5>
                                    </>
                                ))}
                            </>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Todo;
