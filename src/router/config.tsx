import type { RouteObject } from 'react-router';
import HomePage from '../pages/home/page';
import NotFound from '../pages/NotFound';
import DirectoryPage from '../pages/directory/page';
import ReviewsPage from '../pages/reviews/page';
import NewsPage from '../pages/news/page';
import InsightsPage from '../pages/insights/page';
import ServicesPage from '../pages/services/page';
// import ProductsPage from '../pages/products/page';
import ProductDetailPage from '../pages/product-detail/page';
import ProductReviewPage from '../pages/product-review/page';
import TopProductsPage from '../pages/top-products/page';
import ShowcasePage from '../pages/showcase/page';
import ResourceCentrePage from '../pages/resource-centre/page';
import ProductsPage from '../pages/products/page';
import AgenciesPage from '../pages/agencies/page';

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
    path: '/tools',
    element: <ProductsPage />,
  },
  {
    path: '/products',
    element: <TopProductsPage />,
  },
  {
    path: '/products/:id',
    element: <ProductDetailPage />,
  },
  {
    path: '/product-review',
    element: <ProductReviewPage />,
  },
  {
    path: '/showcase',
    element: <ShowcasePage />,
  },
  {
    path: '/resource-centre/:tab',
    element: <ResourceCentrePage />,
  },
  {
    path: '/agencies',
    element: <AgenciesPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
