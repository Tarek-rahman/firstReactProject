import { Outlet } from 'react-router-dom';
import Navber from './Navber';
import Footer from './Footer';

const Root = () => {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
