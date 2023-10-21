import React, { useState, useEffect } from 'react';
import './Wordpressblog.scss';
import PostCard from './Postcard'; // Import the PostCard component


function WordPressPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the WordPress API with _embed parameter
    fetch('https://cepeda.se/Blog/wp-json/wp/v2/posts?_embed')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='blog-container'>

      <div className='blog-intro'>
      <h1 className="animate__animated animate__fadeInUp">CHRISTINAS BLOG</h1>
      <p className="animate__animated animate__fadeInUp animate__delay-1s"> 
        My blog is where I share my insights, expertise, and inspiration.
        I will cover a wide range of topics related to tech, education and design and
        gather articles, how-to-guides, tips and industry updates. </p>
      </div>

      {loading ? (
    <p>Loading...</p>
  ) : (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )}   

    </div>
  );
  }
    

  export default WordPressPosts
