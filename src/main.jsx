import { StrictMode,  } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './Router/Router';
import { RouterProvider } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

// AOS initialization
AOS.init({
  duration: 1000,
  once: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
