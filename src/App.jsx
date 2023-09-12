import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/BookMarks/Bookmark'


function App() {
const[bookmarks,setBookmarks]=useState([])
const[readingTime,setreadingTime]=useState(0)

const handleAddToBookMarks=blog=>{
  const newBookmarks=[...bookmarks,blog]
  setBookmarks(newBookmarks)
}
const handleMarkAsRed=(time,id)=>{
   const newReadingtime= readingTime +time;
   setreadingTime(newReadingtime)
   console.log("removw",id);
   const remainingBook=bookmarks.map(bookmark=>bookmark.id !==id)
   setBookmarks(remainingBook)
}
  return (
    <>

    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs
       handleMarkAsRed={handleMarkAsRed}
       handleAddToBookMarks={handleAddToBookMarks}>
       
       </Blogs>
  <Bookmark  readingTime={readingTime} bookmarks={bookmarks}></Bookmark>
    
    </div>
    
    </>
  )
}

export default App
