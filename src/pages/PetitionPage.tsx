import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Users, Loader2, ArrowLeft } from 'lucide-react';
import { getPetition, getPetitionSignatures } from '../lib/db';
import { SignPetitionForm } from '../components/SignPetitionForm';
import type { Petition, Signature } from '../lib/db';

export function PetitionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [petition, setPetition] = useState<Petition>();
  const [signatures, setSignatures] = useState<Signature[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const petitionId = parseInt(id || '0');

  const loadData = async () => {
    try {
      const [petitionData, signaturesData] = await Promise.all([
        getPetition(petitionId),
        getPetitionSignatures(petitionId),
      ]);

      if (!petitionData) {
        navigate('/');
        return;
      }

      setPetition(petitionData);
      setSignatures(signaturesData);
    } catch (error) {
      console.error('Failed to load petition data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [petitionId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    );
  }

  if (!petition) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-red-600 mb-4">Petition not found</p>
        <Link to="/" className="text-indigo-600 hover:text-indigo-700">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Petitions
      </Link>
      
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{petition.title}</h1>
        <p className="text-gray-600 mb-6 text-lg">{petition.description}</p>

        <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
          <Users className="w-6 h-6 text-indigo-600 mr-2" />
          <span className="text-lg font-medium text-indigo-900">
            {petition.signatures_count} people have signed
          </span>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Sign this petition</h2>
          <SignPetitionForm
            petitionId={petitionId}
            onSign={loadData}
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Signatures</h2>
          <div className="space-y-4">
            {signatures.length === 0 ? (
              <p className="text-gray-500">Be the first to sign this petition!</p>
            ) : (
              signatures.map((signature) => (
                <div
                  key={signature.id}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <p className="font-medium text-gray-900">{signature.name}</p>
                  <p className="text-sm text-gray-500">
                    Signed on {new Date(signature.signed_at).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}