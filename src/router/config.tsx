import type { RouteObject } from 'react-router';
import HomePage from '../pages/home/page';
import NotFound from '../pages/NotFound';
import DirectoryPage from '../pages/directory/page';
import ReviewsPage from '../pages/reviews/page';
import NewsPage from '../pages/news/page';
import InsightsPage from '../pages/insights/page';
import ServicesPage from '../pages/services/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/directory',
    element: <DirectoryPage />,
  },
  {
    path: '/reviews',
    element: <ReviewsPage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: '/insights',
    element: <InsightsPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
