import { useEffect, useState } from 'react';

import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import CategoryCard from '../../components/CategoryCard';

import './styles.css';

function CategoryCardHolder() {
  axios.defaults.withCredentials = true;
  const [categoryList, setCategoryList] = useState([]);
  async function getCategories() {
    const response = await axios.get('http://localhost:4000/api/categories');
    setCategoryList(response.data);
  }
  useEffect(() => getCategories(), []);
  return (
    <Swiper className="categories-swiper" slidesPerView={3}>
      <SwiperSlide>
        <CategoryCard name="Add Transaction" icon="add_circle_outline" />
      </SwiperSlide>

      {categoryList.map((category) => (
        <>
          <SwiperSlide key={category.id}>
            <CategoryCard {...category} />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
}
export default CategoryCardHolder;
