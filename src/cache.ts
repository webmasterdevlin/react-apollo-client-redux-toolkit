import { InMemoryCache, makeVar } from "@apollo/client";
import { FetchTodoList } from "./todo/operations/queries/__generated__/FetchTodoList";

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                todoList() {
                    return todosListVar;
                },
            },
        },
    },
});

export const todosListVar = makeVar<FetchTodoList>({
    todoList: [],
});
