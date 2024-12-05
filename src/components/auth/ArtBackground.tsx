import React from 'react';

export function ArtBackground() {
  return (
    <div className="hidden lg:block lg:w-1/2 relative">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='400' y1='800' x2='400' y2='0'%3E%3Cstop offset='0' stop-color='%23666'/%3E%3Cstop offset='1' stop-color='%23000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' fill-opacity='0.05' d='M0 0h800v800H0z'/%3E%3Cg fill-opacity='0.05'%3E%3Cpath fill='url(%23a)' d='M769 229l43.1-43.1c8.9-8.9 11.7-22.9 6.7-34.9s-16.9-19.7-29.7-19.7H200c-12.8 0-24.7 7.7-29.7 19.7s-2.2 26 6.7 34.9L220.1 229c3.1 3.1 8.2 3.1 11.3 0l43.1-43.1c8.9-8.9 11.7-22.9 6.7-34.9s-16.9-19.7-29.7-19.7H200c-12.8 0-24.7 7.7-29.7 19.7s-2.2 26 6.7 34.9L220.1 229c3.1 3.1 8.2 3.1 11.3 0l43.1-43.1c8.9-8.9 11.7-22.9 6.7-34.9s-16.9-19.7-29.7-19.7H200c-12.8 0-24.7 7.7-29.7 19.7s-2.2 26 6.7 34.9L220.1 229c3.1 3.1 8.2 3.1 11.3 0l43.1-43.1c8.9-8.9 11.7-22.9 6.7-34.9s-16.9-19.7-29.7-19.7H200c-12.8 0-24.7 7.7-29.7 19.7s-2.2 26 6.7 34.9L220.1 229c3.1 3.1 8.2 3.1 11.3 0'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 backdrop-blur-sm"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="w-full max-w-xl text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to PetitionHub</h2>
          <p className="text-lg">
            Join our community and make your voice heard. Create and sign petitions that matter.
          </p>
        </div>
      </div>
    </div>
  );
}