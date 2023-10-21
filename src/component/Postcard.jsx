import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import './Postcard.scss'

function PostCard({ post }) {
    const postDate = new Date(post.date).toLocaleDateString();
    const featuredMedia = post._embedded && post._embedded['wp:featuredmedia'];
    const slug = post.slug;
    
  // Get the base URL from the environment variable
const baseUrl = process.env.REACT_APP_BASE_URL || '';

// Construct the postLink URL by combining the base URL and route path
const postLink = `${baseUrl}/Blog/${post.date}/${slug}`;


  
    if (!featuredMedia || featuredMedia.length === 0) {
      // Handle the case where featured media is missing
      console.log(post);

    
      return (
        <Link to={postLink} className="post-card">
          <div className="post-card-content">

            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <p>{postDate}</p>
          </div>
          </Link>
      );
      }

    // If featured media exists, access the source_url
    const featuredImage = featuredMedia[0].source_url;
  
    return (
      <Link to={postLink} className="post-card">
        <div className="post-card-content">
          {featuredImage && <img src={featuredImage} alt={post.title.rendered} />}
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <p>{postDate}</p>
        </div>
      </Link>
    );
  }

  export default PostCard;