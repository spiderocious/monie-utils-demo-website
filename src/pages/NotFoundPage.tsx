import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-9xl text-primary-600 mb-4">404</h1>
          <h2 className="font-semibold text-2xl text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-600 max-w-md">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="btn-primary btn-md inline-flex items-center"
          >
            <Home className="mr-2 w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline btn-md inline-flex items-center"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
