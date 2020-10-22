import { gql } from "@apollo/client";

export const INSERT_TODO_ITEM = gql`
    mutation insertTodoItem {
        insert_todo_item(
            objects: { list_id: "", note: "", priority: high, title: "", reminder: "" }
        ) {
            affected_rows
            returning {
                list_id
                note
                priority
                reminder
                title
                list {
                    color
                    id
                    title
                }
            }
        }
    }
`;
