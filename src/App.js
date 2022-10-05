import logo from './logo.svg';
import './App.css';
import BookHome from './components/BookHome';
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import BookCard from './components/BookCard';
import AuthorsCard from './components/AuthorsCard';
import FeedBack from './components/FeedBack';
import Homebanner from './components/HomeBanner';
import WishList from './components/WishList';


function App() {

  const [myBooks, setMyBooks] = useState([])
  const [isClicked, setIsClicked] = useState(true)
  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/books")
    .then((responce)=>responce.json())
    .then((data)=>setBooks(data))
},[])

const handleclick = (book)=>{
  if (isClicked=== true){
     setMyBooks([...myBooks, book])
  }else{
    
    const arr = myBooks.filter((mybook) => mybook !== book);
    setMyBooks(arr)}
  
  setIsClicked(isClicked)
}
  console.log(books)
  return (
    <div className="App">
      <div>
      
        <BrowserRouter>
          <Homebanner />
          <NavBar />
          <Routes>
            <Route path="/" element={<BookHome books={books} />} />
            <Route path="/wishlist" element={<WishList myBooks={myBooks} setMyBooks={setMyBooks} handleclick={handleclick} key={books.id} />} />
            <Route path="/authors" element={<AuthorsCard books={books}/>} />
            <Route path="/feedback" element={<FeedBack />} />
          </Routes>
        </BrowserRouter>,

    </div>
    </div>
  );
}

export default App;
