import SearchResult, { SearchResultProps } from "@/components/utility/search-result/SearchResult";
import { mockSearchResultProps } from "@/components/utility/search-result/SearchResult.mocks";


const ResultsPage: React.FC<{}> = () => {
  return (
    <section>
      {[...new Array(6)].map((item, index) => (
        <SearchResult
          key={index}
          {...mockSearchResultProps.base as SearchResultProps}
        />
      ))}
    </section>
  )
}

export default ResultsPage;