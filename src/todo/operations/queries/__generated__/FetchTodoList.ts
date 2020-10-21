/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchTodoList
// ====================================================

export interface FetchTodoList_todo_list {
  __typename: "todo_list";
  id: any;
  color: string | null;
  title: string;
}

export interface FetchTodoList {
  /**
   * fetch data from the table: "todo_list"
   */
  todo_list: FetchTodoList_todo_list[];
}
