/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchTodoList
// ====================================================

export interface FetchTodoList_todoList_items {
  __typename: "todo_item";
  id: any;
  title: string;
}

export interface FetchTodoList_todoList {
  __typename: "todo_list";
  id: any;
  color: string | null;
  title: string;
  /**
   * An array relationship
   */
  items: FetchTodoList_todoList_items[];
}

export interface FetchTodoList {
  /**
   * fetch data from the table: "todo_list"
   */
  todoList: FetchTodoList_todoList[];
}
