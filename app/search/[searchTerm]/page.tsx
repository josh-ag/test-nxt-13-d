import Link from "next/link";

type PageProp = {
  params: {
    searchTerm: string;
  };
};

type SearchResultProp = {
  organic_results: [
    {
      position: number;
      link: string;
      title: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const searchQuery = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );

  const data: SearchResultProp = await res.json();

  return data;
};

export default async function SearchItemPage({
  params: { searchTerm },
}: PageProp) {
  const results = await searchQuery(searchTerm);

  return (
    <div>
      <p className="text-center font-medium">
        You search for: {searchTerm.toString()}
      </p>

      <ol className="space-y-5 p-5">
        {results.organic_results.map((data, index) => (
          <li className="list-decimal" key={index}>
            <Link
              href={data.link}
              className="underline text-sky-600"
              target={"_blank"}
            >
              <p className="font-bold">{data.title}</p>
            </Link>
            <p>{data.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
