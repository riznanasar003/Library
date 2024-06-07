import logo from './logo.svg';
import './App.css';
import AddBook from './Components/AddBook';
import SearchBook from './Components/SearchBook';
import DeleteBook from './Components/DeleteBook';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>

      <Route path='/' element={<AddBook/>}/>      
      <Route path='/search' element={<SearchBook/>}/>      
      <Route path='/delete' element={<DeleteBook/>}/>      
      <Route path='/viewAll' element={<ViewAll/>}/>      


    </Routes>
   </BrowserRouter>
  );
}

export default App;
