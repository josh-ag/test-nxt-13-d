export const dynamicParams = true;

import { TodoProp } from "@/propTypes.d";
import NotFound from "./not-found";

//- @pageProp
type PageProp = {
  params: { id: string };
};

const getTodo = async (id: string) => {
  /*
    -@enforce server-side rendering
    i.e fetch(url, { cache: "no-cache" }); 
 
    -@enforce static generation (SSG)
    i.e fetch(url, { cache: "force-cache" }); 
  
    -@enforce incremental static regeneration(ISR)
    i.e fetch(url, { next: {revalidate: 60} }); 
  */

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + id,
    { next: { revalidate: 60 } }
  );

  const resp = await response.json();

  return resp;
};

async function TodoPage({ params: { id } }: PageProp) {
  const todo: TodoProp = await getTodo(id);

  if (!todo.id) return <NotFound />;

  return (
    <div className={`max-w-lg mx-auto bg-pink-300 shadow-md`}>
      <div className="divide-y-2 divide-gray-500 divide-dashed">
        <h4 className="text-3xl p-4 text-center text-slate-600">
          {todo.title}
        </h4>
        <div className="flex justify-between items-center py-2 px-5 mt-6">
          <p className="text-gray-700 text-lg">#User:{todo.userId}</p>
          <p className="text-gray-700 text-lg">
            Completed: {todo?.completed ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;

//enforce SSG/ISR
export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/?_limit=20"
    );

    const resp = await response.json();

    return resp.map((todo: TodoProp) => ({ id: todo.id.toString() }));
  } catch (err) {
    console.log("Error: ", err);
  }
}
