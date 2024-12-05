import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { SocialLogin } from '../components/auth/SocialLogin';
import { ArtBackground } from '../components/auth/ArtBackground';

export function LoginPage() {
  return (
    <div className="min-h-screen w-full flex">
      {/* Login Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Sign in to PetitionHub</h2>
            <p className="mt-2 text-sm text-gray-600">
              Start your journey with us
            </p>
          </div>
          
          <LoginForm />
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <SocialLogin />
          
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Art Background Side */}
      <ArtBackground />
    </div>
  );
}