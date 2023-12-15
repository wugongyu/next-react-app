import SearchResult, { SearchResultProps } from "@/components/utility/search-result/SearchResult";
import database from '@/lib/search/database.json';

async function getData() {
  // const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
  console.log(database);
  return database;
}

export default async function ResultsPage() {
  const data = await getData();
  return (
    <section>
      {[...data].map((item, index) => (
        <SearchResult
          key={index}
          {...item as SearchResultProps}
        />
      ))}
    </section>
  )
}