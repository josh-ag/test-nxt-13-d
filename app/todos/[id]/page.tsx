import { TodoProp } from "@/propTypes.d";
import NotFound from "./not-found";

export const dynamicParams = true;

//- @pageProp
type PageProp = {
  params: { id: string };
};

const getTodo = async (id: string) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

export default async function TodoPage({ params: { id } }: PageProp) {
  const todo: TodoProp = await getTodo(id);

  if (!todo.id) return <NotFound />;

  return (
    <div className={`container flex justify-center`}>
      <div className="h-auto w-8/12 bg-orange-400 rounded flex flex-col justify-center shadow-md">
        <h4 className="text-3xl p-4 text-center text-gray-600">{todo.title}</h4>
        <div style={{ borderBottom: "2px dotted #666", marginTop: "2rem" }} />
        <div className="flex justify-between items-center pb-4 px-5 mt-6">
          <p className="text-gray-700 text-lg">By User:{todo.userId}</p>
          <p className="text-gray-700 text-lg">
            Completed: {todo?.completed ? "true" : "false"}
          </p>
        </div>
      </div>
    </div>
  );
}

//enforce SSG/ISR
export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/?_limit=10"
    );

    const resp = await response.json();

    return resp.map((todo: TodoProp) => ({ id: todo.id.toString() }));
  } catch (err) {
    console.log("Error: ", err);
  }
}
