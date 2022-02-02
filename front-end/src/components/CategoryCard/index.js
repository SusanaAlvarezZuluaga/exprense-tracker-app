import './styles.css';

function CategoryCard({
  name,
  icon,
  className,
  setCategory,
  setShowCategorories,
}) {
  return (
    <div
      className={`category-card ${className}`}
      onClick={() => {
        setCategory(name);
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
