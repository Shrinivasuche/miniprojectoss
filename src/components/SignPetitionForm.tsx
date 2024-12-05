import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { signPetition } from '../lib/db';

interface SignPetitionFormProps {
  petitionId: number;
  onSign: () => void;
}

export function SignPetitionForm({ petitionId, onSign }: SignPetitionFormProps) {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await signPetition(petitionId, name);
      setName('');
      onSign();
    } catch (error) {
      console.error('Failed to sign petition:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your Full Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
          disabled={isSubmitting}
          placeholder="Enter your name"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Signing...
          </>
        ) : (
          'Sign this Petition'
        )}
      </button>
    </form>
  );
}