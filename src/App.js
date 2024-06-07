import logo from './logo.svg';
import './App.css';
import AddBook from './Components/AddBook';
import SearchBook from './Components/SearchBook';
import DeleteBook from './Components/DeleteBook';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <div>
     <AddBook/>
     <SearchBook/>
     <DeleteBook/>
     <ViewAll/>
    </div>
  );
}

export default App;
