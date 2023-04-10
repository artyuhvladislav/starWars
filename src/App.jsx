import { Pagination, Table, ToolList } from "./components";

function App() {
  return <div className="container">
    <h1 className="title">Characters</h1>
    <ToolList />
    <Table />
    <Pagination />
  </div>;
}

export default App;
