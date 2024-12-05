import React from 'react';
import { CreatePetitionForm } from '../components/CreatePetitionForm';
import { ScrollText } from 'lucide-react';

export function CreatePetitionPage() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="text-center mb-8">
        <ScrollText className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">Start Your Petition</h1>
        <p className="mt-2 text-gray-600">
          Create a petition that will make a difference in your community.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <CreatePetitionForm />
      </div>
    </div>
  );
}