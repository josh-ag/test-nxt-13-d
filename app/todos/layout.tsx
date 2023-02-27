import React from "react";
import { TodoProp } from "@/propTypes.d";
import { TodoItems } from "../Components/todoItem";

const getTodos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=20",
    { method: "get" }
  );

  const resp = await response.json();
  return resp;
};

export default async function TodosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const todos: TodoProp[] = await getTodos();

  return (
    <div className="flex px-6 mt-4">
      <div className="flex flex-col">
        <h2 className="text-2xl text-gray-600 font-bold text-center my-4">
          Todos
        </h2>
        {todos.map((todo: TodoProp) => (
          <TodoItems todo={todo} key={todo.id} />
        ))}
      </div>
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}
