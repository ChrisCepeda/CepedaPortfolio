import React, { useState, useEffect } from 'react';
import './Wordpressblog.scss';
import PostCard from './Postcard'; // Import the PostCard component


function WordPressPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the WordPress API with _embed parameter
    fetch('https://cepeda.se/Blog/wp-json/wp/v2/posts')
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
    <div>
      <h1>WordPress Posts</h1>
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
