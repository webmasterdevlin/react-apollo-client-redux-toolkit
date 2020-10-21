import { gql } from "@apollo/client";

export const FETCH_TODO_LIST = gql`
    query FetchTodoList {
        todo_list {
            id
            color
            title
        }
    }
`;
