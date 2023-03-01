const searchQuery = async (term: string) => {};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: string;
}) {
  const result = await searchQuery(searchParams);

  return <div>Search Term</div>;
}
