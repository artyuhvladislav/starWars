import { Pagination, Table, ToolList } from "./components";
import SearchParamProvider from "./context/SearchContext";
import { FilterProvider } from "./context/FilteredContext";

function App() {

  return <div className="container">

    <h1 className="title">Characters</h1>
    <SearchParamProvider>
      <FilterProvider>
        <ToolList />
        <Table />
      </FilterProvider>
    </SearchParamProvider>
    {/* <Pagination /> */}
  </div>;
}

export default App;
