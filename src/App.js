import './App.css';
import BookHome from './components/BookHome';
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import Homebanner from './components/HomeBanner';
import WishList from './components/WishList';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FeedBack from './components/FeedBack';

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
      alert ("Added to wishlist")
    
    setIsClicked(isClicked)
  }
  console.log(books)
  console.log(myBooks)

  const textSize = {
    fontSize: "40px"
  }
  return (
    <div className="App">
      <div>
      
        <BrowserRouter>
          <Homebanner />
          <NavBar />
          <Routes>
            <Route path="/" element={<BookHome textSize={textSize} books={books} setBooks={setBooks} key={books.id} handleclick={handleclick} />} />
            <Route path="/wishlist" element={<WishList textSize={textSize} myBooks={myBooks} setMyBooks={setMyBooks} handleclick={handleclick} key={books.id} />} />
            <Route path="/feedback" element={<FeedBack textSize={textSize} />} />
          </Routes>
        </BrowserRouter>,

    </div>
    </div>
  );
}

export default App;
