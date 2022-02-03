import './styles.css';

function CategoryCard({
  id,
  name,
  icon,
  className,
  setCategoryId,
  setShowCategorories,
}) {
  return (
    <div
      className={`category-card ${className}`}
      onClick={() => {
        setCategoryId(id);
        setShowCategorories(false);
      }}
    >
      <span
        className={
          className
            ? 'material-icons category-icon small-icon'
            : 'material-icons category-icon'
        }
      >
        {icon}
      </span>
      <div className="category-card-title">{name}</div>
    </div>
  );
}
export default CategoryCard;
