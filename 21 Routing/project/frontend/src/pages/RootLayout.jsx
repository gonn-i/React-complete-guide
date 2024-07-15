import { Outlet, useNavigation } from 'react-router-dom';
import MainNav from '../components/MainNavigation';

function RootLayout() {
  // 1) 로딩 인디케이터를 불러오는 방법 -> navigation.state === 'loading'
  // 전환할 목적지 페이지에 추가되는게 아니라, 전환이 시작될때 이미 화면에 표시된 페이지에 표시됨!
  // const navigation = useNavigation();

  return (
    <>
      <MainNav />
      <main>
        {/* {navigation.state === 'loading' && <h2>로딩중입니다!</h2>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
