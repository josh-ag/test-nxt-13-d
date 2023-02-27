import Link from "next/link";
import { TodoProp } from "@/propTypes.d";

export const TodoItems = ({ todo }: { todo: TodoProp }) => {
  return (
    <Link
      href={`/todos/${todo.id}`}
      className="h-auto w-60 bg-blue-200 rounded-md px-2 py-4 mb-2  hover:bg-blue-300 hover:shadow-sm"
    >
      <h2 className="text-2xl text-center">{todo.title}</h2>
    </Link>
  );
};
