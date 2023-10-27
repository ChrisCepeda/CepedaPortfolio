import React, { useState, useEffect } from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://cepeda.se/Blog/wp-json/wp/v2/categories');
      const categories = await response.json();
      return categories;
    } catch (error) {
      console.error('Error fetching categories: ', error);
    }
  };

  function CategoriesList({ categories, onClickCategory }) {
    return (
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onClickCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    );
  }
  useEffect(() => {
    // Fetch categories when the component mounts
    fetchCategories().then((data) => setCategories(data));
  }, []);


  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <CategoriesList categories={categories} onClickCategory={handleCategoryClick} />
    </div>
  );
}

export default App;

function CategoriesList({ categories, onClickCategory }) {
    return (
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onClickCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    );
  }


  