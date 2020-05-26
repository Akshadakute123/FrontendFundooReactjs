
import React, { useState, useEffect } from 'react';
import Posts from './Posts'
import Pagination from './Pagination'
import axios from 'axios';
import { findnotes, createNote } from '../service/service'

import Noteslistpagination from './Bffd';
import CreateNote from './CreateNote';
// import './App.css';

const Paginationpage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    findallnotes()
    
}, [])

  const findallnotes = () => {
    findnotes()
        .then(Response => {
            setPosts(Response.data)

            console.log(Response.data, "list")
            console.log(Response.data)
            // alert((Response.data.message))
        }).catch((error) => {
            console.log(error.response.data)
           
            alert(error.response.data.message)
        });
}

console.log(posts)
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <CreateNote function={findallnotes}/>

      <Noteslistpagination posts={currentPosts} function={findallnotes}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Paginationpage;
