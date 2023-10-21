import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Fullblog.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function FullBlogContent() {
    const { slug } = useParams();

    // State to store the blog content
    const [blogContent, setBlogContent] = useState(null);

    // Fetch the blog content based on 'date' and 'slug'
    useEffect(() => {
        const apiUrl = `https://cepeda.se/Blog/wp-json/wp/v2/posts?_embed&slug=${slug}`;


        fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Check if data is an array and contains at least one post
            if (Array.isArray(data) && data.length > 0) {
                setBlogContent(data[0]); // Set the first post as the blogContent
            } else {
                console.error('Post not found');
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}, [slug]);

    if (!blogContent || !blogContent.title) {
        // Render a loading state or an error message if needed
        return <div>Loading...</div>;
    }

        // Extract and format the date
        const postDate = new Date(blogContent.date);

        // Format the date as "Friday 20th Oct 2023"
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).format(postDate);

    // Render the full blog content
    return (
        <div className="full-blog-content">
            <h2>{blogContent.title.rendered}</h2>
            <p>Published on: {formattedDate}</p>

            <div style={{backgroundColor:'#fff'}}dangerouslySetInnerHTML={{ __html: blogContent.content.rendered }} />

            <div className='goback-button'>
            <Link to="/Blog">
            <motion.button className='about-button'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
            <p>GO BACK</p>  
            </motion.button> 
            </Link>
            </div>
       
        </div> 
    );
}

export default FullBlogContent;
