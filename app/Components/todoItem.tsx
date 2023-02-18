import { TodoProp } from "@/propTypes.d";
import Link from "next/link";

export const TodoItems = ({ todo }: { todo: TodoProp }) => {
  return (
    <Link
      className="w-2/4 h-auto bg-blue-200 rounded-md px-2 py-4 mb-2"
      href={`/todos/${todo.id}`}
    >
      <h2 className="text-2xl text-center">{todo.title}</h2>
    </Link>
  );
};
