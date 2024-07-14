import { useParams } from 'react-router-dom';

function ProductDetail() {
  const params = useParams(); // useParams 훅 실행

  return (
    <>
      <h1>제품 상세 페이지</h1>
      <p> {params.productId}</p>
    </>
  );
}

export default ProductDetail;
