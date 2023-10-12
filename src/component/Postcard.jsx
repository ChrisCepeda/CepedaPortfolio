import React from 'react';
import './Postcard.scss'

function PostCard({ post }) {
  const postDate = new Date(post.date).toLocaleDateString();

  console.log(post);
  const featuredImage = post._embedded && post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;

  console.log (featuredImage);

  return (
    <div className="post-card">
      <div className="post-card-content">
        {featuredImage && <img src={featuredImage} alt={post.title.rendered} />}
        <h2>{post.title.rendered}</h2>
        <p>{postDate}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </div>
  );
}

export default PostCard;