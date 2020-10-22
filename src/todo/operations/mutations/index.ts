import { gql } from "@apollo/client";

export const INSERT_TODO_ITEM = gql`
    mutation insertTodoItem(
        $list_id: uuid!
        $note: String
        $priority: priority_level_enum!
        $title: String!
        $reminder: date
    ) @client {
        insert_todo_item(
            objects: {
                list_id: $list_id
                note: $note
                priority: $priority
                title: $title
                reminder: $reminder
            }
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
