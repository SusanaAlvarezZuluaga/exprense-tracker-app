import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import CategoryCard from '../../components/CategoryCard';
import CategoryListContext from '../../contexts/CategoryList/CategoryListContext';

import './styles.css';

function CategoryCardHolder() {
  const categoryListContext = useContext(CategoryListContext);
  const { categoryList, setCategoryList } = categoryListContext;
  return (
    <Swiper className="categories-swiper" slidesPerView={3}>
      <SwiperSlide>
        <CategoryCard name="Add Transaction" icon="add_circle_outline" />
      </SwiperSlide>

      {categoryList.map((category) => (
        <>
          <SwiperSlide>
            <CategoryCard {...category} />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
}
export default CategoryCardHolder;
