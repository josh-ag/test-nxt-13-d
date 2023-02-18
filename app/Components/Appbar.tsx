import Link from "next/link";

export const Appbar = () => {
  return (
    <main className="bg-blue-500 p-4 ">
      <div className="container flex justify-between align-center">
        <div className="flex flex-1">
          <Link href={"/"} className="text-white text-3xl">
            Next-13
          </Link>
        </div>
        <div className="flex">
          <Link href={"/"} className="p-2 block rounded bg-white text-blue-600">
            Home
          </Link>

          <Link
            href={"/todos"}
            className="p-2 block rounded bg-white text-blue-600 ml-2"
          >
            Todos
          </Link>

          <Link
            href={"/about"}
            className="p-2 block rounded bg-white text-blue-600 ml-2"
          >
            About
          </Link>
        </div>
      </div>
    </main>
  );
};
