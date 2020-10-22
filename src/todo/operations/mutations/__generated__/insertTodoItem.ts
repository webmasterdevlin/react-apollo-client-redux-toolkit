/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { priority_level_enum } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: insertTodoItem
// ====================================================

export interface insertTodoItem_insert_todo_item_returning_list {
  __typename: "todo_list";
  color: string | null;
  id: any;
  title: string;
}

export interface insertTodoItem_insert_todo_item_returning {
  __typename: "todo_item";
  list_id: any;
  note: string | null;
  priority: priority_level_enum;
  reminder: any | null;
  title: string;
  /**
   * An object relationship
   */
  list: insertTodoItem_insert_todo_item_returning_list;
}

export interface insertTodoItem_insert_todo_item {
  __typename: "todo_item_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: insertTodoItem_insert_todo_item_returning[];
}

export interface insertTodoItem {
  /**
   * insert data into the table: "todo_item"
   */
  insert_todo_item: insertTodoItem_insert_todo_item | null;
}

export interface insertTodoItemVariables {
  list_id: any;
  note?: string | null;
  priority: priority_level_enum;
  title: string;
  reminder?: any | null;
}
