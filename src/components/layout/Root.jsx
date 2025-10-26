import { Outlet } from 'react-router-dom';
import Navber from '../shared/Navber';
import Footer from '../shared/Footer';

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
