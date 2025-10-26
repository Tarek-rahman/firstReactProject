import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Home from '../components/pages/Home';
import Products from '../components/pages/Products';
import Blogs from '../components/pages/Blogs';
import Contact from '../components/pages/Contact';
import About from '../components/pages/About';
const router = createBrowserRouter([
  {
    // path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'products', Component: Products },
      { path: 'blogs', Component: Blogs },
      { path: 'contact', Component: Contact },
      { path: 'about', Component: About },
    ],
  },
]);

export default router;
