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
            <div>
                {data?.todoList?.map((t) => (
                    <Card style={{ marginBottom: "4rem" }}>
                        <CardContent>
                            <h3>{t.title}</h3>
                            <>
                                {t.items.length == 0 ? (
                                    <div>oh oh.. empty</div>
                                ) : (
                                    t.items.map((i) => (
                                        <>
                                            <h5>> {i.title}</h5>
                                        </>
                                    ))
                                )}
                            </>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Todo;
