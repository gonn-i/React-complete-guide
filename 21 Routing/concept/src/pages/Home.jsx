import { useNavigate } from 'react-router-dom';

// Link 는 요소에 대한 클릭을 감시하여, 클릭시 Http 요청을 전송하는 브라우저의 기본 설정을 막아주며
// 대신 라우트 정의를 확인하여 그에 맞춰 페이지를 업데이트하게 된다
function HomePage() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/products');
  };
  return (
    <>
      <h1> 홈페이지입니다 🏠 </h1>
      <p>
        <button onClick={handleClick}>상품 보기 가기🏃🏻‍♀️</button>
      </p>
    </>
  );
}

export default HomePage;
