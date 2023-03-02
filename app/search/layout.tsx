import { SearchBar } from "../Components/searchBar";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mt-6 w-full">
      <SearchBar />
      <div className="mt-4 max-w-md mx-auto">{children}</div>
    </div>
  );
}
