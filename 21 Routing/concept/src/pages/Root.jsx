import MainNav from '../components/MainNav';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
