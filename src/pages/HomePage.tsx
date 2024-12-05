import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { getAllPetitions } from '../lib/db';
import { PetitionCard } from '../components/PetitionCard';
import type { Petition } from '../lib/db';

export function HomePage() {
  const [petitions, setPetitions] = useState<Petition[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPetitions = async () => {
      try {
        const data = await getAllPetitions();
        setPetitions(data);
      } catch (error) {
        console.error('Failed to load petitions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPetitions();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Make Your Voice Heard</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join thousands of people who are making a difference through online petitions.
        </p>
      </div>
      
      {petitions.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No petitions yet. Be the first to start one!</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {petitions.map((petition) => (
            <PetitionCard key={petition.id} petition={petition} />
          ))}
        </div>
      )}
    </div>
  );
}