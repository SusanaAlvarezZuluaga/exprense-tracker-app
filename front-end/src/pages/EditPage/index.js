import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import TransactionListContext from '../../contexts/TransactionList/TransactionListContext';
import CategoryListContext from '../../contexts/CategoryList/CategoryListContext';

import CategoryCard from '../../components/CategoryCard';
import TransactionCard from '../../components/TransactionCard';

import './styles.css';
function EditPage() {
  const transactionListContext = useContext(TransactionListContext);
  const categoryListContext = useContext(CategoryListContext);

  const { transactionList, setTransactionList } = transactionListContext;
  const { categoryList, setCategoryList } = categoryListContext;

  return (
    <div class="page-container">
      <div class="header-container">
        <div class="page-title">EDIT</div>
      </div>
      <div class="content">
        <div class="small-container">
          <div class="small-container-title">Categories</div>
          <div class="small-container-info-holder">
            <Swiper className="swiper" slidesPerView={2}>
              <SwiperSlide>
                <CategoryCard
                  name="Add Transaction"
                  icon="add_circle_outline"
                />
              </SwiperSlide>

              {categoryList.map((category) => (
                <>
                  <SwiperSlide>
                    <CategoryCard {...category} />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>

        <div class="transactionsHolder">
          <div class="transactionsHolderTitle">
            <div>Transactions</div>

            <span class="material-icons md-24">add_circle_outline</span>
            <div class="transaction-cards-holder"></div>
            {transactionList.map((transaction, index) => (
              <TransactionCard {...transaction} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditPage;
