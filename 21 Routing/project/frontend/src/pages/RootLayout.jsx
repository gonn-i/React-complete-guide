import { Outlet } from 'react-router-dom';
import MainNav from '../components/MainNavigation';

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
