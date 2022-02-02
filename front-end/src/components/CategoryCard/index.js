import { SwiperSlide } from 'swiper/react/';
import './styles.css';
function CategoryCard({ name, icon }) {
  return (
    <div class="category-card">
      <div class="ctegory-card-icon">
        <span class="material-icons md-36">{icon}</span>
      </div>
      <div class="category-card-title">{name}</div>
    </div>
  );
}
export default CategoryCard;
