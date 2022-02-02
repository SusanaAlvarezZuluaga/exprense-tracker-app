import { useContext } from 'react';

import CategoryCard from '../../components/CategoryCard';
import CategoryListContext from '../../contexts/CategoryList/CategoryListContext';

import './styles.css';
function CategoryPicker({ category, setCategory, setShowCategorories }) {
  const categoryListContext = useContext(CategoryListContext);
  const { categoryList, setCategoryList } = categoryListContext;
  return (
    <div className="category-picker">
      {categoryList.map((category) => (
        <CategoryCard
          {...category}
          className="miniature-card"
          setCategory={setCategory}
          setShowCategorories={setShowCategorories}
        />
      ))}
    </div>
  );
}

export default CategoryPicker;
