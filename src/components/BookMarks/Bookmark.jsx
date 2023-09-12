import React from "react";
import Bookmak from './../Bookmark/Bookmak';

const Bookmark = ({ bookmarks,readingTime }) => {
  return (
    <div className="w-1/3">
      <div>readingTime:{readingTime}</div>
      <h2>Bookmarks:{bookmarks.length}</h2>
      {bookmarks.map((bookmark,idx)=> <Bookmak key={idx} bookmark={bookmark}></Bookmak>) }
    </div>
  );
};

export default Bookmark;
