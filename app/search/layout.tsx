export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div>Search Bar</div>
      <div>{children}</div>
    </div>
  );
}
