import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryCard from '../../components/CategoryCard';
import CategoryListContext from '../../contexts/CategoryList/CategoryListContext';

import './styles.css';
function CategoryPicker({ setCategoryId, setShowCategorories }) {
  axios.defaults.withCredentials = true;
  const [categoryList, setCategoryList] = useState([]);
  async function getCategories() {
    const response = await axios.get('http://localhost:4000/api/categories');
    //console.log(response);
    setCategoryList(response.data);
  }
  useEffect(() => getCategories(), []);
  return (
    <div className="category-picker">
      {categoryList.map((category) => (
        <CategoryCard
          key={category.id}
          {...category}
          className="miniature-card"
          setCategoryId={setCategoryId}
          setShowCategorories={setShowCategorories}
        />
      ))}
    </div>
  );
}

export default CategoryPicker;
