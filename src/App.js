import logo from './logo.svg';
import './App.css';
import BookHome from './components/BookHome';
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import BookCard from './components/BookCard';
import AuthorsCard from './components/AuthorsCard';
import FeedBack from './components/FeedBack';


function App() {

  const [books, setBooks] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/books")
    .then((responce)=>responce.json())
    .then((data)=>setBooks(data))
},[])
  console.log(books)
  return (
    <div className="App">
      <div>
      
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<BookHome />} />
            <Route path="/books" element={<BookCard books={books}/>} />
            <Route path="/authors" element={<AuthorsCard books={books}/>} />
            <Route path="/feedback" element={<FeedBack />} />
          </Routes>
        </BrowserRouter>,

    </div>
    </div>
  );
}

export default App;
