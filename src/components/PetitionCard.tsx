import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import type { Petition } from '../lib/db';

interface PetitionCardProps {
  petition: Petition;
}

export function PetitionCard({ petition }: PetitionCardProps) {
  return (
    <Link
      to={`/petition/${petition.id}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {petition.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{petition.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="w-4 h-4 mr-1" />
            <span>{petition.signatures_count} signatures</span>
          </div>
          <div className="flex items-center text-sm text-indigo-600 font-medium">
            View Details
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
      <div className="px-6 py-3 bg-gray-50 text-xs text-gray-500">
        Started on {new Date(petition.created_at).toLocaleDateString()}
      </div>
    </Link>
  );
}