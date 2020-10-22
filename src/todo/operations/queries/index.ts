import { gql } from "@apollo/client";

export const FETCH_TODO_LIST = gql`
    query FetchTodoList @client {
        todoList: todo_list {
            id
            color
            title
            items {
                id
                title
            }
        }
    }
`;
