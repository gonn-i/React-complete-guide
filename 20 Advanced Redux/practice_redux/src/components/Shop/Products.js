import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem title="햄버거" price={6} description="더블 패티 버거에 참깨빵" id="1" />
        <ProductItem title="감튀" price={3} description="맥도날드 감튀 먹고싶다" id="2" />
      </ul>
    </section>
  );
};

export default Products;
