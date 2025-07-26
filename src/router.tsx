import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import LandingPage from '@/pages/LandingPage';
import DocsPage from '@/pages/DocsPage';
import NotFoundPage from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'demo',
        element: <DocsPage />,
      },
      {
        path: 'docs',
        element: <DocsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
