import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ScrollText } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <Link to="/" className="flex items-center">
              <ScrollText className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PetitionHub</span>
            </Link>
            {location.pathname !== '/create' && (
              <Link
                to="/create"
                className="inline-flex items-center px-4 py-2 my-auto border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start a Petition
              </Link>
            )}
          </div>
        </div>
      </nav>
      <main className="py-10">
        {children}
      </main>
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Make your voice heard. Start or sign a petition today.
          </p>
        </div>
      </footer>
    </div>
  );
}