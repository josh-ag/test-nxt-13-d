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

async function TodosPage() {
  const todos: TodoProp[] = await getTodos();

  // if (!todos) return <NotFound />;

  return (
    <main>
      <div className="flex flex-col justify-center items-center my-4">
        <h2 className="text-2xl text-gray-600 font-bold text-center my-4">
          Todos
        </h2>
        {todos.map((todo: TodoProp) => (
          <TodoItems todo={todo} key={todo.id} />
        ))}
      </div>
    </main>
  );
}

export default TodosPage;
