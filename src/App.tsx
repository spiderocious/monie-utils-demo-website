import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#374151',
            color: '#F9FAFB',
          },
        }}
      />
    </div>
  );
}

export default App;
