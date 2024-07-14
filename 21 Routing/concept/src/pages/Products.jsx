import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 'p1', title: '제품1' },
  { id: 'p2', title: '제품2' },
  { id: 'p3', title: '제품3' },
];

function Products() {
  return (
    <div>
      <h1> 제품 페이지입니다 🛒</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li>
            <Link to={`/product/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
