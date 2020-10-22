import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_TODO_LIST } from "../operations/queries";
import { FetchTodoList } from "../operations/queries/__generated__/FetchTodoList";

const Todo = () => {
    const { loading, data, error } = useQuery<FetchTodoList>(FETCH_TODO_LIST);

    if (loading) return <p>loading...</p>;

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

    return (
        <div>
            <h1>Todo</h1>
            <p>This is a complex todo list component.</p>
            <div>
                {data?.todoList?.map((t) => (
                    <>
                        <h3>{t.id}</h3>
                        <h3>{t.title}</h3>
                        <>
                            {t.items.map((i) => (
                                <>
                                    <h5>{i.id}</h5>
                                    <h5>{i.title}</h5>
                                </>
                            ))}
                        </>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Todo;
