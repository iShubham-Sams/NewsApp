import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";
import {useGlobalContext} from './Context'

function App() {
  const name =useGlobalContext()
  return (
    <>
      <h1>Shubham Bhandari News App {name}</h1>
      <Search/>
      <Pagination/>
      <Stories/>
    </>
  );
}

export default App;
