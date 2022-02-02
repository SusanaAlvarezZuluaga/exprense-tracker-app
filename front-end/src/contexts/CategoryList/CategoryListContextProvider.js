import CategoryListContext from './CategoryListContext';
import { useState } from 'react';
function CategoryListContextProvider(props) {
  const initialCategories = [
    { name: 'Groceries', icon: 'local_grocery_store' },
    { name: 'Restaurant', icon: 'restaurant' },
    { name: 'Pharmacy', icon: 'medication' },
  ];
  const [categoryList, setCategoryList] = useState(initialCategories);
  return (
    <CategoryListContext.Provider
      value={{
        categoryList: categoryList,
        setCategoryList: setCategoryList,
      }}
    >
      {props.children}
    </CategoryListContext.Provider>
  );
}
export default CategoryListContextProvider;
