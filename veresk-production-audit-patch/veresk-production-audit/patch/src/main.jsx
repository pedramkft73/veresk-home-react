import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';
import './assets/responsive.css';
import './assets/wordpress-compatibility.css';
import './assets/production-audit.css';

const rootElement = document.getElementById('root');
const isWordPressHomepage = Boolean(document.getElementById('veresk-react-home'));

if (rootElement) {
  if (isWordPressHomepage) {
    createRoot(rootElement).render(
      <StrictMode><Home /></StrictMode>,
    );
  } else {
    Promise.all([
      import('react-router-dom'),
      import('./Routes/Routes.jsx'),
    ]).then(([{ RouterProvider }, { router }]) => {
      createRoot(rootElement).render(
        <StrictMode><RouterProvider router={router} /></StrictMode>,
      );
    });
  }
}
